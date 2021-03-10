import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAld0DtVDabDypM1Wun5nm6gSaph9aKBqM",
  authDomain: "locationfinder-e9bfa.firebaseapp.com",
  projectId: "locationfinder-e9bfa",
  storageBucket: "locationfinder-e9bfa.appspot.com",
  messagingSenderId: "283049832915",
  appId: "1:283049832915:web:eed2f6007ed73220c1bf26",
  measurementId: "G-KYFDK785B2",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app(); // if already initialized, use that one
}

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: "select_account " });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
