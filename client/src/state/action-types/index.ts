export enum actionTypes {
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
    USERDATA = 'USERDATA',
    SHOWERROR = 'SHOWERROR',
}

export interface User {
    id: number;
    phoneNumber: string;
    iat: number,
    name:string,
    photo:string,
    bio:string,
  }

export interface Errors {
    errState: boolean;
    errMessage: string;
}
