import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  walletAddress: string;
  stakeCount: number;
}

const userSchema: Schema = new Schema({
  walletAddress: { type: String, required: true, unique: true },
  stakeCount: { type: Number, default: 0 }
});

const User = mongoose.model<IUser>('User', userSchema);

export default User;
