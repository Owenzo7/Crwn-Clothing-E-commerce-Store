import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvdXzqVZPkA_91PuZXM8XHDxCfDTnIfZA",
  authDomain: "crwn-clothing-db-98dd4.firebaseapp.com",
  projectId: "crwn-clothing-db-98dd4",
  storageBucket: "crwn-clothing-db-98dd4.appspot.com",
  messagingSenderId: "1007324262493",
  appId: "1:1007324262493:web:aecea7b4aa11dfb4e3ddb4",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
