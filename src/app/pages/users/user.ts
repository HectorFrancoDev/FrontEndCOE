export class User {
  _id: string;
  name: string;
  password: string;
  email: string;
  is_active: boolean;

  public constructor(_id: string, name: string, email:  string, password: string, is_active: boolean) {
    this._id = _id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.is_active = is_active;
  }
}
