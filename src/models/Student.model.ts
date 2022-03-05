import { model, Schema } from 'mongoose';
import { IStudent } from '../interfaces/IModel';

const studentSchema = new Schema<IStudent>({
  studentCode: { type: String, required: true },
  fullname: { type: String, required: true },
  address: { type: String, required: true },
});

export default model<IStudent>('students', studentSchema);
