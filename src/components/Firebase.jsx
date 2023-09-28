// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyD3pFdGFXm6UHfJLQZZzU7giDk2NfGVgxs",
	authDomain: "yero-85426.firebaseapp.com",
	projectId: "yero-85426",
	storageBucket: "yero-85426.appspot.com",
	messagingSenderId: "145603110645",
	appId: "1:145603110645:web:b68a39eaf8dcee7d6247bc",
	measurementId: "G-RJW58QN4FS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
