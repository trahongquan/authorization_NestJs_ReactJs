import { Expose, Transform } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  Matches,
} from 'class-validator';
import { base } from 'src/common/base.dto';

export class CreateUserDto {
  @Expose()
  @IsNotEmpty()
  @IsString()
  @Length(3, 30)
  email: string;

  // @Expose()
  phone: number;

  @Expose()
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value || 'user')
  role: string;

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
        'Mật khẩu phải dài ít nhất 8 ký tự và chứa ít nhất một chữ hoa, một chữ thường, một số và một ký tự đặc biệt',
    },
  )
  @IsNotEmpty()
  password: string;

  constructor() {
    this.role = 'user';
  }
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
        'Mật khẩu phải dài ít nhất 8 ký tự và chứa ít nhất một chữ hoa, một chữ thường, một số và một ký tự đặc biệt',
    },
  )
  @IsNotEmpty()
  password: string;
}
