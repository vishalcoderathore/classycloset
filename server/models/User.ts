import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  googleId: string;
  displayName: string;
}

const userSchema = new Schema<IUser>({
  googleId: String,
  displayName: String,
});

mongoose.model<IUser>('users', userSchema);
