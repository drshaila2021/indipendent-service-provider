// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjNOseHvM4kdIvfKcAZ_QLx7pECqWRLCM",
  authDomain: "indipendent-service-provider.firebaseapp.com",
  projectId: "indipendent-service-provider",
  storageBucket: "indipendent-service-provider.appspot.com",
  messagingSenderId: "912270920555",
  appId: "1:912270920555:web:fbd3297156f76c234fda2e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
