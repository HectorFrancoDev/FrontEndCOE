import { User } from '../users/user';
import { Token } from './token';

export class LoginData {
  user: User;
  token: Token;

  public constructor(user: User, token: Token) {
    this.user = user;
    this.token = token;
  }
}
