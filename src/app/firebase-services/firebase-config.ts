// src/app/firebase/firebase-config.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';
import { environment } from '../../environment/environment';


const firebaseApp = initializeApp(environment.firebase);
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const functions = getFunctions(firebaseApp, 'us-central1');

export { firebaseApp, auth, firestore, functions };
