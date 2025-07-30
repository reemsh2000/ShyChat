export enum actionTypes {
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
    USERDATA = 'USERDATA',
    SHOWERROR = 'SHOWERROR',
    CURRENTCHAT = 'CURRENTCHAT',
}

export interface User {
    id: number;
    email: string;
    iat: number,
    name:string,
    photo:string,
    bio:string,
  }

export interface Errors {
    errState: boolean;
    errMessage: string;
}
