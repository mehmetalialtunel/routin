import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { User } from "firebase";

@Injectable()
export class AuthService {

    public user : User;

    constructor(private afAuth : AngularFireAuth){
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

    getCurrent(){
        debugger;
        return this.afAuth.auth.currentUser;
    }
}