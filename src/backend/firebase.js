import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDw9TphCpRqa5vJEQPjwdBp4ktLHOX1oZM",
    authDomain: "todolist-bd326.firebaseapp.com",
    projectId: "todolist-bd326",
    storageBucket: "todolist-bd326.appspot.com",
    messagingSenderId: "657657617680",
    appId: "1:657657617680:web:35c4b8666fcaecf3b61995"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();


export {db, auth, storage};