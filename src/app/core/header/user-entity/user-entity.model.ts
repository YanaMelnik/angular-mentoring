export interface UserEntityModel {
  id: number;
  firstName: string;
  lastName: string;
}

export class UserEntity implements UserEntityModel {
  id: number;
  firstName: string;
  lastName: string;

  constructor (
    id: number,
    firstName: string,
    lastName: string
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
