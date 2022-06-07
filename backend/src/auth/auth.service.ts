import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { UsersService } from 'src/users/users.service';

type PasswordOmitUser = Omit<User, 'password'>;

/**
 * @description
 */
@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService, private usersService: UsersService) {}
  

  async validateUser(email: User['email'], pass: User['password']): Promise<PasswordOmitUser | null> {
    const user = await this.usersService.getUserbyEmail(email); 


    if (user && bcrypt.compareSync(pass, user.password)) {
      const { password, ...result } = user;

      return result;
    }

    return null;
  }

  async login(user: PasswordOmitUser) {
    const payload = { userId: user.id, username: user.name , useremail: user.email };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
