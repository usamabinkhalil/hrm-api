import { model, Schema, Document } from 'mongoose';
import { Job } from '@interfaces/jobs.interface';

const jobSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    minSalary: {
      type: Number,
      required: [true, 'Min salary is required'],
    },
    maxSalary: {
      type: Number,
      required: [true, 'Max salary is required'],
    },
    tecStack: {
      type: [String],
      default: [],
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const jobModel = model<Job & Document>('Job', jobSchema);

export default jobModel;
