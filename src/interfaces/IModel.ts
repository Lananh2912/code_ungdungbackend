import { Document } from 'mongoose';

export interface IStudent extends Document {
  studentCode: string;
  fullname: string;
  address: string;
}

export interface IUser extends Document {
  username: string;
  password: string;
}
