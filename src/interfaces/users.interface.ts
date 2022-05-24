import { Department } from './department.interface';
import { Job } from './jobs.interface';

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  avatar: string;
  phone: string;
  role: string;
  isActive: boolean;
  tecStack: Array<string>;
  salary: number;
  joiningDate: Date;
  jobType: string;
  department: Department;
  job: Job;
}
