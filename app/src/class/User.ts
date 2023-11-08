export class User {
  id: string;
  email: string;
  username: string;
  password: string;
  roles: string;

  constructor(id?: string, email?: string, username?: string,password?: string,roles?: string) {
    this.id = id ?? '';
    this.email = email ?? '';
    this.username = username ?? '';
    this.password = password ?? '';
    this.roles = roles ?? '';
  }
}
