import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto, LoginUserDto } from '../users/user.dto';
import * as process from 'node:process';
import { UserService } from '../users/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}
  async register(userDto: CreateUserDto) {
    const user = await this.userService.createUser(userDto);
    const token = this._createAccessToken(user);
    console.log(token);
    return {
      email: user.email,
      ...token,
    };
  }
  async login(loginUserDto: LoginUserDto) {
    const user = await this.userService.findByLogin(loginUserDto);
    const user_return = { ...user };
    delete user_return.password;
    const token = this._createAccessToken(user);
    const token2 = this._createRefreshToken(user);
    return {
      ...user_return,
      ...token,
      ...token2,
    };
  }
  async validateUser(email) {
    const user = await this.userService.findByEmail(email);
    if (!user) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }
  // private _createAccessToken({ email }): any {
  //   const accessToken = this.jwtService.sign({ email });
  //   return {
  //     expiresIn: process.env.EXPIRESIN_ACCESS_TOKEN,
  //     accessToken,
  //   };
  // }
  // private _createRefreshToken({ email }): any {
  //   const refeshToken = this.jwtService.sign({ email });
  //   return {
  //     expiresIn: process.env.EXPIRESIN_REFRESH_TOKEN,
  //     refeshToken,
  //   };
  // }
  private _createAccessToken({ email }: { email: string }): any {
    if (!email) {
      throw new Error('Email is required to create an access token.');
    }
    const expiresIn = parseInt(process.env.EXPIRESIN_ACCESS_TOKEN); // Chuyển đổi thành số
    try {
      const accessToken = this.jwtService.sign({ email }, { expiresIn });
      return {
        expiresIn: expiresIn,
        accessToken,
      };
    } catch (error) {
      console.log(error.message);
      throw new Error('Failed to create access token.');
    }
  }

  private _createRefreshToken({ email }: { email: string }): any {
    /** nhận một đối tượng có thuộc tính email dưới dạng đối số và đảm bảo rằng email đang được truyền vào hàm. */
    if (!email) {
      throw new Error('Email is required to create a refresh token.');
    }
    const expiresIn = parseInt(process.env.EXPIRESIN_REFRESH_TOKEN); // Sử dụng expiresIn như chuỗi
    try {
      const refreshToken = this.jwtService.sign({ email }, { expiresIn });
      return {
        expiresIn: expiresIn,
        refreshToken,
      };
    } catch (error) {
      console.log(error.message);
      throw new Error('Failed to create refresh token.');
    }
  }
}
