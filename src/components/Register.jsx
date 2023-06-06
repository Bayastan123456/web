import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleSignup } from "../store/auth/authActions";
import { setEmail, setPassword } from "../store/auth/authSlice";

const Register = () => {
  const { email, password, emailError, passwordError } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUser = () => {
    const obj = {
      email,
      password,
      navigate,
    };
    dispatch(handleSignup(obj));
  };

  return (
    <div>
      {emailError || passwordError}
      <br />
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => dispatch(setEmail(e.target.value))}
      />
      <br />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => dispatch(setPassword(e.target.value))}
      />
      <br />
      <button onClick={handleUser}>Register</button>
    </div>
  );
};

export default Register;
