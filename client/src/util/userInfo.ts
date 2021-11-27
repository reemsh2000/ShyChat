
import jwt_decode from "jwt-decode";
import { User } from "../state/action-types/index";
 
const token:string = document.cookie;
const userInfo = ():User => {
    const userData:User = jwt_decode(token)
    return userData
};

export default userInfo;
