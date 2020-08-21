import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthClientService {

  constructor( private afAuth:AngularFireAuth) { }

  login(email:string, password:string) {
    return new Promise((resolve,reject) => {
    this.afAuth.auth.signInWithEmailAndPassword(email,password)
    .then((userData) => resolve(userData),(error) => reject(error))
  })
}

register(email, password) {
  return new Promise((resolve,reject) => {
  this.afAuth.auth.createUserWithEmailAndPassword(email,password)
  .then((userData) => resolve(userData),(error) => reject(error))
})
}


  loginWithGoogle() {
    return new Promise((resolve,reject) => {
      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((userData) => resolve(userData),(error) => reject(error))
    })
  }


  logOut() {
return this.afAuth.auth.signOut()
  }

getAuth(): any {
    return this.afAuth.authState.pipe(auth=> auth)
}


}