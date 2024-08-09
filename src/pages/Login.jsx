import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let [state1, setstate1] = useState("");
  let [state2, setstate2] = useState("");

  let navigate = useNavigate();

  let email = localStorage.getItem("email");
  let password = localStorage.getItem("password");
  console.log(email, password);

  let btn1Click = (e) => {
    e.preventDefault();

    if (state1 !== email || state2 !== password) {
      alert("Enter the correct  input field");
      setstate1("");
      setstate2("");
    } else {
      alert("suceesfull login");
      navigate("/Mens");
    }
  };
  return (
    <div className="parent-form">
      <div className="form">
        <h1>LogIn</h1>
        <br />
        <form action="">
          <label htmlFor="">EnterEmail:</label>{" "}
          <input
            type="email"
            placeholder="EnterEmail"
            className="input"
            onChange={(e) => {
              setstate1(e.target.value);
            }}
            name="name"
            value={state1}
          />
          <br />
          <br />
          <label htmlFor="">EnterPassword:</label>{" "}
          <input
            type="password"
            placeholder="EnterPassword"
            className="input"
            onChange={(e) => {
              setstate2(e.target.value);
            }}
            name="name"
            value={state2}
          />
          <br />
          <br />
          <button onClick={btn1Click} className="signup-btn">
            LogIn
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
