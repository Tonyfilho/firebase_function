// src/app/firebase/firebase-firestore.service.ts
import { Injectable } from '@angular/core';
import { firestore } from './firebase-config';
import { collection, getDocs } from 'firebase/firestore';

@Injectable({ providedIn: 'root' })
export class FirebaseFirestoreService {
  getUsers() {
    const usersRef = collection(firestore, 'users');
    return getDocs(usersRef);
  }
}
