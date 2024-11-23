import { Expose, Transform } from 'class-transformer';
import { IsNotEmpty, IsString, Length, Matches } from 'class-validator';
import { base } from 'src/common/base.dto';

export class User extends base {
  @Expose()
  @IsNotEmpty()
  @IsString()
  @Length(3, 30)
  email: string;

  @Expose()
  @IsNotEmpty()
  @IsString()
  @Length(3, 30)
  username: string;

  @Expose()
  @IsNotEmpty()
  @Length(8, 30)
  @IsString()
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    {
      message:
        'Password must be at least 8 characters long and contain at least one uppercase, one lowercase, one number and one special character',
    },
  )
  password: string;

  @Expose()
  @Transform(({ obj }) => obj.username + ' ' + obj.password)
  up: string;
}

export class CreateUserDto {
  @Expose()
  @IsNotEmpty()
  @IsString()
  @Length(3, 30)
  email: string;

  @Expose()
  phone: string;

  @Expose()
  @IsNotEmpty()
  @IsString()
  @Length(3, 30)
  username: string;

  @Expose()
  @Length(8, 30)
  @IsString()
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    {
      message:
        'Password must be at least 8 characters long and contain at least one uppercase, one lowercase, one number and one special character',
    },
  )
  @IsNotEmpty()
  password: string;
}

export class LoginUserDto {
  @Expose()
  @IsNotEmpty()
  @IsString()
  @Length(3, 30)
  email: string;

  @Expose()
  @IsNotEmpty()
  @Length(8, 30)
  @IsString()
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    {
      message:
        'Password must be at least 8 characters long and contain at least one uppercase, one lowercase, one number and one special character',
    },
  )
  @IsNotEmpty()
  password: string;
}
