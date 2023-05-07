import express, { Request, Response, NextFunction } from 'express';
import authRoutes from './routes/authRoutes';
import cookieSession from 'cookie-session';
import keys from './config/keys';
import mongoose from 'mongoose';
import passport from 'passport';
import dotenv from 'dotenv';
import cors from 'cors';
require('./models/User');
require('./services/passport');

dotenv.config();

/*
 * Connect to Mongoose Database
 */
const MONGODB_URI = keys.mongoURI;

if (MONGODB_URI == null || MONGODB_URI.trim() === '') {
  console.error('MONGODB_URI is not defined in the environment variables');
  process.exit(1);
}
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('MongoDB database connection established successfully');
  })
  .catch((error: Error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

/*
 * Mongoose logs
 */
mongoose.set('debug', true);

/*
 * Express Server
 */
const app = express();
app.use(cors());
app.use(express.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  }),
);

/*
 * This workaround allows the use of Passport v0.6.0 and therefore get rid of the security vulnerability CVE-2022-25896
 * Register regenerate & save after the cookieSession middleware initialization
 */
app.use((request: Request, response: Response, next: NextFunction) => {
  if (request.session && !request.session.regenerate) {
    request.session.regenerate = (cb: () => void) => {
      cb();
    };
  }
  if (request.session && !request.session.save) {
    request.session.save = (cb: () => void) => {
      cb();
    };
  }
  next();
});

/*
 * Initialize Passport
 */
app.use(passport.initialize());
app.use(passport.session());

/*
 * Include routing paths
 */
authRoutes(app);

app.get('/api/shop', async (_: Request, res: Response) => {
  const collectionName = 'Customers';
  const items = await connection.collection(collectionName).find({}).toArray();
  res.json(items);
});

const PORT = Number(process.env.PORT) > 0 ? Number(process.env.PORT) : 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
