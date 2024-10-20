// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBC_oKfzSeJ2phlnrgR9rRKcTAF8_hM8UU",
  authDomain: "ast-engine-rule.firebaseapp.com",
  projectId: "ast-engine-rule",
  storageBucket: "ast-engine-rule.appspot.com",
  messagingSenderId: "473198018285",
  appId: "1:473198018285:web:a83046d16c8760177416e4",
  measurementId: "G-WXGR399HR5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

