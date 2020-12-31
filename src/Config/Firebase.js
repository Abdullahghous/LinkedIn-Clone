import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAjE1LjmfeNDQ9YUZs1W6jCLX3wSxkYGQA",
    authDomain: "linkedin-clone-a19e8.firebaseapp.com",
    projectId: "linkedin-clone-a19e8",
    storageBucket: "linkedin-clone-a19e8.appspot.com",
    messagingSenderId: "53365737032",
    appId: "1:53365737032:web:65e3879e20ba74dc727a7d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
