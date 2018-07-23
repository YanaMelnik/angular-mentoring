export interface UserEntityModel {
  // id: number;
  firstName: string;
  lastName: string;
  login: string;
  password: string;
  token: string;
}

export class UserEntity implements UserEntityModel {
  firstName: string;
  lastName: string;
  login: string;
  password: string;
  token: string;

  constructor(
    firstName: string,
    lastName: string,
    login: string,
    password: string,
    token: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.login = login;
    this.password = password;
    this.token = token;
  }
}
