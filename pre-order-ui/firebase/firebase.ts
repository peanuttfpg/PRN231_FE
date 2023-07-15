import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC-buI_ydYrsT5KPo-dD5nKlddLO6ieRwM",
    authDomain: "prn231project.firebaseapp.com",
    projectId: "prn231project",
    storageBucket: "prn231project.appspot.com",
    messagingSenderId: "302115888849",
    appId: "1:302115888849:web:3b56ecdb3aede18da06ff0"
};
// let Firebase;

const Firebase = firebase.initializeApp(firebaseConfig);
// init Storage
export const firebaseStorage = getStorage(Firebase);

export default Firebase;