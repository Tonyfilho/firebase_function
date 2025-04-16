// src/app/firebase/firebase-auth.service.ts
import { Injectable } from '@angular/core';
import { auth } from './firebase-config';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

@Injectable({ providedIn: 'root' })
export class FirebaseAuthService {
  login(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  logout() {
    return signOut(auth);
  }
}
