import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDiLlLtX1GgwlVRzDmvTV5INiQ-BDj0WU4",
    authDomain: "crwn-clothing-55965.firebaseapp.com",
    databaseURL: "https://crwn-clothing-55965.firebaseio.com",
    projectId: "crwn-clothing-55965",
    storageBucket: "crwn-clothing-55965.appspot.com",
    messagingSenderId: "747783373249",
    appId: "1:747783373249:web:93e5132b056c67af2caf40",
    measurementId: "G-DQQDV6M9R1"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ promt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

