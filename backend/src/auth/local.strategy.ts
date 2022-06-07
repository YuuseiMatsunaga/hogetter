import { Strategy as BaseLocalStrategy } from 'passport-local';

import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from 'src/entities/user.entity';

type PasswordOmitUser = Omit<User, 'password'>;

/**
 * @description
 */
@Injectable()
export class LocalStrategy extends PassportStrategy(BaseLocalStrategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(email: User['email'], pass: User['password']): Promise<PasswordOmitUser> {
    // 認証して結果を受け取る
    const user = await this.authService.validateUser(email, pass);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}