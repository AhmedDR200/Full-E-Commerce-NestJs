import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true, versionKey: false })
export class User {
  @Prop({
    type: String,
    required: [true, 'Name is required'],
    minlength: [3, 'Name is too short'],
    maxlength: [30, 'Name is too long'],
  })
  name: string;

  @Prop({
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
  })
  email: string;

  @Prop({
    type: String,
    required: [true, 'Password is required'],
    select: false,
    minlength: [6, 'Password is too short'],
    maxlength: [30, 'Password is too long'],
  })
  password: string;

  @Prop({
    type: String,
    required: [true, 'Role is required'],
    enum: ['user', 'admin'],
    default: 'user',
  })
  role: string;

  @Prop({
    type: String,
  })
  avatar: string;

  @Prop({
    type: Number,
  })
  age: number;

  @Prop({
    type: String,
  })
  phoneNumber: string;

  @Prop({
    type: String,
  })
  address: string;

  @Prop({
    type: Boolean,
  })
  isActive: boolean;

  @Prop({
    type: String,
  })
  OTP: string;

  @Prop({
    type: String,
    enum: ['male', 'female'],
  })
  gender: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
