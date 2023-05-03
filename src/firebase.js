import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBHW904Ej5pSVvgy0V-O-a4-k1B6Y1f6s8",
    authDomain: "todo-app-8fdac.firebaseapp.com",
    projectId: "todo-app-8fdac",
    storageBucket: "todo-app-8fdac.appspot.com",
    messagingSenderId: "980579108650",
    appId: "1:980579108650:web:c84b09e4c4cffb9c87c053",
    measurementId: "G-D2K30GQWQB"
});


// const firebaseApp = firebase.initializeApp({firebaseConfig)};
// Your firebaseCongif file comes here

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db, firebase };