export interface UserEntityModel {
  firstName: string;
  lastName: string;
  login: string;
  password: string;
}

export interface UserInfoModel {
  firstName: string;
  lastName: string;
  login: string;
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
