import mongoose from 'mongoose';
import configs from '../configs';

export default async () => {
  await mongoose.connect(configs.mongoUri);
  console.log('MongoDB is connected');
};
