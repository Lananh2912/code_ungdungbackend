import { model, Schema } from 'mongoose';
import { IUser } from '../interfaces/IModel';

const userSchema = new Schema<IUser>({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

export default model<IUser>('users', userSchema);
