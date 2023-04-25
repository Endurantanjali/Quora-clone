// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCw1Cxrqk_O55ehFz_BlHPF-b2Dxdguygk",
  authDomain: "quora-clone-mern-6832b.firebaseapp.com",
  projectId: "quora-clone-mern-6832b",
  storageBucket: "quora-clone-mern-6832b.appspot.com",
  messagingSenderId: "469319300771",
  appId: "1:469319300771:web:89f0183f294d0cf3d57116",
  measurementId: "G-MGV1G1HPRJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };