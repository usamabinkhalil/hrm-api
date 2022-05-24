export interface Job {
  _id: string;
  title: string;
  minSalary: number;
  maxSalary: number;
  tecStack: Array<string>;
  description: string;
}
