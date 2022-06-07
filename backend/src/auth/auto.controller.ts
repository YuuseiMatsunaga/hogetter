import { AuthGuard } from '@nestjs/passport';
import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { AppService } from '../app.service';
import { AuthService } from './auth.service';

type PasswordOmitUser = Omit<User, "password">

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req: { user: PasswordOmitUser }) {
    const user = req.user;

    return this.authService.login(req.user);
  }

  /**
   * @description
   */
  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Request() req: { user: PasswordOmitUser }) {
    const user = req.user;

    return req.user;
  }
}