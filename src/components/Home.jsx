import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authListener, handleLogout } from "../store/auth/authActions";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(authListener());
  }, []);
  return (
    <div>
      Home
      <hr />
      {user ? (
        <div>
          <h3>Welcome {user}</h3>
          <button onClick={() => dispatch(handleLogout(navigate))}>
            Logout
          </button>
        </div>
      ) : (
        <button onClick={() => navigate("/login")}>Login</button>
      )}
    </div>
  );
};

export default Home;
