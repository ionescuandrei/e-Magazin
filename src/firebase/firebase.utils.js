import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDFp30PaRG22Y9me1hXFr3r1lCPdMlVPEU",
  authDomain: "e-magazin-f84bf.firebaseapp.com",
  databaseURL: "https://e-magazin-f84bf.firebaseio.com",
  projectId: "e-magazin-f84bf",
  storageBucket: "e-magazin-f84bf.appspot.com",
  messagingSenderId: "424154512896",
  appId: "1:424154512896:web:a5b39ab8bf3c3e5837e2e5",
  measurementId: "G-WL2C9N6YLP"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
