import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyB7drabj2OBthe0WTEipRci2Qurg3_MQSE",
  authDomain: "js32-firebase.firebaseapp.com",
  projectId: "js32-firebase",
  storageBucket: "js32-firebase.appspot.com",
  messagingSenderId: "115887136753",
  appId: "1:115887136753:web:9472364f5d11eaf3f2ae50",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
