export enum actionTypes {
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT",
    USERDATA = "USERDATA",
}

export interface User {
    id: number;
    phoneNumber: string;
    iat: number,
  }