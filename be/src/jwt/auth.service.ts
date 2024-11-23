import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto, LoginUserDto, User } from '../users/user.dto';
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
    const token = this._createToken(user);
    console.log(token);
    return {
      email: user.email,
      ...token,
    };
  }
  async login(loginUserDto: LoginUserDto) {
    const user = await this.userService.findByLogin(loginUserDto);
    const token = this._createToken(user);
    return {
      email: user.email,
      ...token,
    };
  }
  async validateUser(email) {
    const user = await this.userService.findByEmail(email);
    if (!user) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }
  private _createToken({ email }): any {
    const accessToken = this.jwtService.sign({ email });
    return {
      expiresIn: process.env.EXPIRESIN,
      accessToken,
    };
  }
}
