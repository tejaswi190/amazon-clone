// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD5BZ_k-Nw_bCah6RfW_TCbQLu2SmrM73s",
    authDomain: "clone-ddb27.firebaseapp.com",
    projectId: "clone-ddb27",
    storageBucket: "clone-ddb27.appspot.com",
    messagingSenderId: "172898950621",
    appId: "1:172898950621:web:63d04d8392e8b9c8372a34",
    measurementId: "G-76B0LE9N90"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig); 
  const db = firebaseApp.firestore();
  const auth = firebase.auth()

  export {db,auth};
