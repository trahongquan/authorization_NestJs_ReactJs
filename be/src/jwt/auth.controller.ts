import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  UseGuards,
  Get,
  Req, Res
} from "@nestjs/common";
import { AuthService } from './auth.service';
import { CreateUserDto, LoginUserDto, User } from '../users/user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
@UsePipes(new ValidationPipe())
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return await this.authService.register(createUserDto);
  }

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto) {
    return await this.authService.login(loginUserDto);
  }

  @Post('logout')
  async logout(@Req() req, @Res() res) {
    return res.status(200).send('Logged out successfully');
  }

  @UseGuards(
    AuthGuard(),
  ) /** Decorator AuthGuard dùng để tự động check tới jwt.strategy */
  @Get('profile')
  async getProfile(@Req() req: any) {
    console.log(req.user);
    return req.user;
  }
}
