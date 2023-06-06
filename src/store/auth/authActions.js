import { createAsyncThunk } from "@reduxjs/toolkit";
import fire from "../../fire";
import { clearErrors, setEmailError, setPasswordError } from "./authSlice";

export const handleSignup = createAsyncThunk(
  "@auth/handleSignup",
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
