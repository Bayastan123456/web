import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authListener, handleLogout } from "../store/auth/authAction";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(authListener());
  }, []);

  return (
    <div>
      <br />
      {user ? (
        <div>
          <h2>Welcome {user}</h2>
          <button onClick={() => dispatch(handleLogout(navigate))}>
            LogOut
          </button>
        </div>
      ) : (
        <button onClick={() => navigate("/login")}>LogIn</button>
      )}
    </div>
  );
};

export default Home;
