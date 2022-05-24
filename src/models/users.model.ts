import { model, Schema, Document, ValidatorProps } from 'mongoose';
import { User } from '@interfaces/users.interface';

const userSchema: Schema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, 'First name is required'],
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required'],
    },
    userName: {
      type: String,
      required: [true, 'User name is required'],
    },
    email: {
      type: String,
      match: /.+\@.+\..+/,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: 'default.jpg',
    },
    phone: {
      type: String,
    },
    role: {
      type: String,
      default: 'employee',
      match: /^(super-admin|admin|employee)$/,
      validate: {
        validator: (value: string) => {
          return /^(super-admin|admin|employee)$/.test(value);
        },
        message: (props: ValidatorProps) => `${props.value} is not a valid role`,
      },
      required: [true, 'Role is required'],
      lowercase: true,
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    tecStack: {
      type: [String],
      default: [],
    },
    salary: {
      type: Number,
      default: 0,
    },
    joiningDate: {
      type: Date,
      default: Date.now,
    },
    jobType: {
      type: String,
      default: 'permanent',
      match: /^(permanent|probation|pre-probation|intern|pre-intern)$/,
      validate: {
        validator: (value: string) => {
          return /^(permanent|probation|pre-probation|intern|pre-intern)$/.test(value);
        },
        message: (props: ValidatorProps) => `${props.value} is not a valid job type`,
      },
      required: [true, 'Job type is required'],
      lowercase: true,
      trim: true,
    },
    department: { type: Schema.Types.ObjectId, ref: 'Department' },
    job: { type: Schema.Types.ObjectId, ref: 'Job' },
  },
  {
    timestamps: true,
  },
);

const userModel = model<User & Document>('User', userSchema);

export default userModel;
