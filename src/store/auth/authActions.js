import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  clearErrors,
  clearInputs,
  setEmail,
  setEmailError,
  setPassword,
  setPasswordError,
  setUser,
} from "./authSlice";
import fire from "../../fire";

export const hanleSingup = createAsyncThunk(
  "@auth/handleSingup",
  async (obj, { dispatch }) => {
    dispatch(clearErrors());
    await fire
      .auth()
      .createUserWithEmailAndPassword(obj.email, obj.password)
      .then(() => {
        obj.navigate("/login");
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            dispatch(setEmailError(err.message));
            break;
          case "auth/weak-password":
            dispatch(setPasswordError(err.message));
            break;
        }
      });
  }
);

export const handleLogin = createAsyncThunk(
  "@auth/handleLogin",
  async (obj, { dispatch }) => {
    dispatch(clearErrors());
    await fire
      .auth()
      .signInWithEmailAndPassword(obj.email, obj.password)
      .then(() => {
        obj.navigate("/");
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/user-disavled":
          case "auth/invalid-email":
          case "auth/user-not-found":
            dispatch(setEmailError(err.message));
            break;
          case "auth/wrong-password":
            dispatch(setPasswordError(err.message));
            break;
        }
      });
  }
);

export const authListener = createAsyncThunk(
  "@auth/authListener",
  async (_, { dispatch }) => {
    await fire.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(clearInputs());
        dispatch(setUser(user?.email));
      } else {
        dispatch(setUser(""));
      }
    });
  }
);

export const handleLogout = createAsyncThunk(
  "@auth/handleLogout",
  async (navigate) => {
    await fire.auth().signOut();
    navigate("/login");
  }
);
