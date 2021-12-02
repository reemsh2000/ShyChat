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
<<<<<<< HEAD
    name:string,
    photo:string,
    bio:string,
  }
=======
  }

export interface Errors {
    errState: boolean;
    errMessage: string;
} 
>>>>>>> 1ca79d06a9273904ec7d9cd5a1860632887c34bd
