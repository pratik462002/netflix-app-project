// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB96F7-2u-0ABogtEa1o3QVtea75BPpC4A",
  authDomain: "netflix-app-daf9d.firebaseapp.com",
  projectId: "netflix-app-daf9d",
  storageBucket: "netflix-app-daf9d.appspot.com",
  messagingSenderId: "289586277034",
  appId: "1:289586277034:web:b301e25f5df3ae9bddfed3",
  measurementId: "G-WDVM37T314",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
