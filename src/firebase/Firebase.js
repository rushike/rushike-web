import {getAuth, signInWithPopup, GoogleAuthProvider } from "@firebase/auth";
import { initializeApp} from "firebase/app"

var config = {
    apiKey: process.env.GATSBY_FIREBASE_API_KEY,
    authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.GATSBY_FIREBASE_DATABASE_URL,
    projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
    storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
  };
  
export class FirebaseHelper {
    constructor(){
        this.currentUser = null;
    }
    

    isAuthenticated(){
        return this.currentUser
    }

    init(){
        initializeApp(config)
    }
    async logInOrLogOut(){
        if(Firebase.isAuthenticated()) return await this.logOut();
        else return await Firebase.doSignInWithGoogle();
    }
    async logOut(){
        await getAuth().signOut();
        Firebase.currentUser = null;
        return Firebase.currentUser;
    }
    async doSignInWithGoogle(){
        await signInWithPopup(getAuth(), new GoogleAuthProvider());
        Firebase.currentUser = getAuth().currentUser;
        return Firebase.currentUser;
    }
    
}
export const Firebase = new FirebaseHelper();
