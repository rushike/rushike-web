import auth from "firebase/auth"
import { Firebase } from "../firebase/Firebase"
export function isAuthenticated(){
    console.log("Current user : ", Firebase.currentUser());
    return Firebase.currentUser
}