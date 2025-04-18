// src/app/firebase/firebase-functions.service.ts
import { Injectable } from '@angular/core';
import { functions } from './firebase-config';
import { httpsCallable } from 'firebase/functions';
import { from, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FirebaseFunctionsService {
  sayHello() {
    const callable = httpsCallable<{ name: string }, string>(functions, 'sayHello');

    return from(callable({ name: 'tony' })).pipe(map(res => res.data));
  }
}
