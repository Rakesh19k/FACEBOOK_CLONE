// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBzkdliQV8xDunGlc2s954mXNrkTUJOw7Y",
    authDomain: "facebook-clone-4c958.firebaseapp.com",
    projectId: "facebook-clone-4c958",
    storageBucket: "facebook-clone-4c958.appspot.com",
    messagingSenderId: "965018698401",
    appId: "1:965018698401:web:7d6118b0458f93f812e6e0",
    measurementId: "G-7R1ZNEPGPT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;