import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  token: string;
  constructor(private route: Router) { }

  authUser(email, passowrd) {
    firebase.auth().createUserWithEmailAndPassword(email, passowrd)
    .then(
      response => {
        this.route.navigate(['/signin']);
      }
    )
    .catch(
      error => console.log(error)
    );
  }

  signIn(email: string, passowrd: string) {
    firebase.auth().signInWithEmailAndPassword(email, passowrd).then(
      response => {
        firebase.auth().currentUser.getToken().then(
          (token: string) => this.token = token
        );
        this.route.navigate(['/']);
      }
    )
    .catch(
      error => console.log(error)
    );
  }

  getToken() {
    firebase.auth().currentUser.getToken().then(
      (token: string) => this.token = token
    );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }
}
