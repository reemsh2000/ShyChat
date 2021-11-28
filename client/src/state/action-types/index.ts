export enum actionTypes {
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT",
    USERDATA = "USERDATA",
    SHOWERROR = "SHOWERROR",
}

export interface User {
    id: number;
    phoneNumber: string;
    iat: number,
  }