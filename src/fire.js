import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyAA53XzriRMGJBcqKY2Q8pL_eHLhFl8MnQ",
  authDomain: "autoficationmentorpr.firebaseapp.com",
  projectId: "autoficationmentorpr",
  storageBucket: "autoficationmentorpr.appspot.com",
  messagingSenderId: "187117760583",
  appId: "1:187117760583:web:2510e2478581a078c38162",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
