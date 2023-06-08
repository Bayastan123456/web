import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyBAqo4YMBsLp6B2iWSZzg2yZv3JC83HY8s",
  authDomain: "auth-javassecret.firebaseapp.com",
  projectId: "auth-javassecret",
  storageBucket: "auth-javassecret.appspot.com",
  messagingSenderId: "909134646829",
  appId: "1:909134646829:web:cd9a9f5deeec74d74b72a4",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
