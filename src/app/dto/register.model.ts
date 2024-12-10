export class Register {
  email: string;
  fullName: string;
  password: string;
  vatsimId: string;
  ivaoId: string;
  posconId: string;


  constructor(email: string, fullName: string, password: string, vatsimId: string, ivaoId: string, posconId: string) {
    this.email = email;
    this.fullName = fullName;
    this.password = password;
    this.vatsimId = vatsimId;
    this.ivaoId = ivaoId;
    this.posconId = posconId;
  }
}

export class RegisterGuest {
  email: string;
  fullName: string;
  password: string;


  constructor(email: string, fullName: string, password: string) {
    this.email = email;
    this.fullName = fullName;
    this.password = password;
  }
}
