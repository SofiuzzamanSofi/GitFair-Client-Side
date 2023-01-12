// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZcpGPmALBFBpOZpNkx7e5cWsPEMjEfUo",
  authDomain: "gitfair.firebaseapp.com",
  projectId: "gitfair",
  storageBucket: "gitfair.appspot.com",
  messagingSenderId: "888724285316",
  appId: "1:888724285316:web:0a2e5a5316c3d0072d5fd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;