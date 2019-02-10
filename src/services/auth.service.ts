import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { User } from "firebase";

@Injectable()
export class AuthService {

    public user : User;

    constructor(public afAuth : AngularFireAuth){
        afAuth.authState.subscribe(user => {
            this.user = user;
        })
    }

    signInWithUsername(credentials){
        return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
    }

    signUp(credentials){
        return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
    }

    onAuthStateChanged(user){
        return this.afAuth.auth.onAuthStateChanged(user);
    }

    subscribe(){
        return this.afAuth.authState.subscribe();
    }

    getCurrent(){
        return this.afAuth.auth.currentUser;
    }

    logOut(){
        return this.afAuth.auth.signOut();
    }
}