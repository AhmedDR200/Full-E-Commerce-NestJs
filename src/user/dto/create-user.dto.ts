import { Optional } from '@nestjs/common';
import { IsBoolean, IsEmail, IsEnum, IsNumber, IsPhoneNumber, IsString, IsUrl, Length } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Name Must Be String' })
  @Length(3, 30, { message: 'Name Must Be Between 3 And 30 Characters' })
  name: string;

  @IsString({ message: 'Email Must Be String' })
  @IsEmail({}, { message: 'Invalid Email' })
  email: string;

  @IsString({ message: 'Password Must Be String' })
  @Length(6, 30, { message: 'Password Must Be Between 6 And 30 Characters' })
  password: string;

  @IsEnum(['user', 'admin'], { message: 'Role Must Be User Or Admin' })
  role: string;

  @IsString({ message: 'Avatar Must Be String' })
  @IsUrl({}, { message: 'Invalid URL' })
  avatar: string;

  @IsString({ message: 'PhoneNumber Must Be String' })
  @IsPhoneNumber('EG', { message: 'Invalid Phone Number' })
  phoneNumber: string;

  @IsNumber({}, { message: 'Age Must Be Number' })
  age: number;

  @IsString({ message: 'Address Must Be String' })
  address: string;

  @Optional()
  isActive: boolean;

  @IsEnum(['male', 'female'], {message: 'Gender Must Male Or Female'})
  gender: string;

  @Optional()
  OTP: string;
}
