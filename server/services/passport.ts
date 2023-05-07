import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import keys from '../config/keys';
import mongoose from 'mongoose';
import { IUser } from '../models/User';

const User = mongoose.model<IUser>('users');

passport.serializeUser((user: Express.User, done) => {
  done(null, (user as IUser).id);
});

passport.deserializeUser((id: string, done) => {
  User.findById(id)
    .then((user) => done(null, user as Express.User))
    .catch((err) => console.log(err));
});

// Google OAuth Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const existingUser = await User.findOne({ googleId: profile.id });
        if (existingUser) {
          return done(null, existingUser as Express.User);
        } else {
          const newUser = await new User({
            googleId: profile.id,
            displayName: profile.displayName,
          }).save();
          return done(null, newUser as Express.User);
        }
      } catch (err) {
        console.log(err);
      }
    },
  ),
);
