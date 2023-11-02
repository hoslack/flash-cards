import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDFtf11GCfdTZkfDBAo25FNvcbzpOsL9cc',
  authDomain: 'flash-cards-37103.firebaseapp.com',
  projectId: 'flash-cards-37103',
  storageBucket: 'flash-cards-37103.appspot.com',
  messagingSenderId: '478515013251',
  appId: '1:478515013251:web:aef5ebeba9d9d8b9355db6',
  measurementId: 'G-S2P27K9GMP',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
