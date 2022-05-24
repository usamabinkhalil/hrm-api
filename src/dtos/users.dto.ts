import { IsEmail, IsString, IsArray, IsDate, IsNumber, IsBoolean } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  public email: string;

  @IsString()
  public password: string;

  @IsString()
  public firstName: string;

  @IsString()
  public lastName: string;

  @IsString()
  public userName: string;

  @IsString()
  public phone: string;

  @IsString()
  public avatar: string;

  @IsString()
  public role: string;

  @IsArray()
  public tecStack: string[];

  @IsDate()
  public joiningDate: Date;

  @IsNumber()
  public salary: number;

  @IsBoolean()
  public isActive: boolean;

  @IsString()
  public description: string;

  @IsString()
  public department: string;

  @IsString()
  public job: string;
}
