import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setEmail, setPassword } from "../store/auth/authSlice";
import { handleLogin } from "../store/auth/authAction";

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
    dispatch(handleLogin(obj));
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
      <button onClick={handleUser}>LogIn</button>
    </div>
  );
};

export default Register;
