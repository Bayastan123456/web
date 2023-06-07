import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyCnPDGbD0rH2NXXVlWNLXNh2L_8bR7p1QI",
  authDomain: "firstproject312.firebaseapp.com",
  projectId: "firstproject312",
  storageBucket: "firstproject312.appspot.com",
  messagingSenderId: "84690673609",
  appId: "1:84690673609:web:2ce18d257afdd6acf5d218",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
