import React, { useContext } from "react";
import "./login.css";
import { useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleUsername(e) {
    setUserName(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  async function handleClick(e) {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });

    try {
      const res = await axios.post("/auth/login", {
        userName: userName,
        password: password,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });

      navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
    }
  }

  return (
    <div className="login">
      <h1>Login form</h1>
      <div className="loginContainer">
        <input
          type="text"
          placeholder="username"
          className="loginInput"
          value={userName}
          onChange={handleUsername}
        />
        <input
          type="password"
          placeholder="password"
          className="loginInput"
          value={password}
          onChange={handlePassword}
        />
        <button
          disabled={loading}
          className="loginButton"
          onClick={handleClick}
        >
          Login
        </button>

        {error && <span className="error">{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;
