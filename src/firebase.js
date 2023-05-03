import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseApp = firebase.initializeApp({
    
});


// const firebaseApp = firebase.initializeApp({firebaseConfig)};
// Your firebaseCongif file comes here

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db, firebase };