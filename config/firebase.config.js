// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
const firebaseConfig = {
    apiKey: "AIzaSyBCF18_VuBVJvRMFsx3OBXMWLNLRCbGvRA",
    authDomain: "sweet-tooth-v2.firebaseapp.com",
    projectId: "sweet-tooth-v2",
    storageBucket: "sweet-tooth-v2.appspot.com",
    messagingSenderId: "295761609235",
    appId: "1:295761609235:web:45078125300e4e94fdf5e6",
    measurementId: "G-WJBDSHN4GY"
  };

  const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
export {db,auth,}