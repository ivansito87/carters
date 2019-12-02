import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDlbrSKF7DVUgfU-93uJPLbPVFTt8fceBI',
  authDomain: 'carters-db.firebaseapp.com',
  databaseURL: 'https://carters-db.firebaseio.com',
  projectId: 'carters-db',
  storageBucket: 'carters-db.appspot.com',
  messagingSenderId: '455348110538',
  appId: '1:455348110538:web:f63c39b33544c6fe63e033',
  measurementId: 'G-07WKK43VST',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;