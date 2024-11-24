require('dotenv').config(); //load file .env vào
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { AuthService } from './auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.SECRETKEY,
    });
  }

  async validate({ email }) {
    const user = await this.authService.validateUser(email);
    if (!user) {
      throw new HttpException(
        'Xác thực token không thành công',
        HttpStatus.UNAUTHORIZED,
      );
    }
    return user;
  }
}
