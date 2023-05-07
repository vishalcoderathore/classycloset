const dotenv = require('dotenv');
dotenv.config();
import express, { Request, Response } from 'express';
import cors from 'cors';
import keys from './config/keys';
import authRoutes from './routes/authRoutes';
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
require('./models/User');

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

// Cookie Configuration
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  }),
);

/*
 * Initialize Passport
 */
app.use(passport.initialize());
// Passport use Cookies
app.use(passport.session());
// Include routing paths
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
