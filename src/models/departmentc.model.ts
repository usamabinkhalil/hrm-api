import { model, Schema, Document } from 'mongoose';
import { Department } from '@interfaces/department.interface';

const departmentSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const departmentModel = model<Department & Document>('Department', departmentSchema);

export default departmentModel;
