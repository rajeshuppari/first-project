import React, { useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  let [state1, setstate1] = useState("");
  let [state2, setstate2] = useState("");
  let [state3, setstate3] = useState("");
  let navigate = useNavigate();

  let signUp = (e) => {
    e.preventDefault();

    if (state1 === "" || state2 === "" || state3 === "") {
      alert("Enter a input field");
    } else {
      localStorage.setItem("email", state2);
      localStorage.setItem("password", state3);
      window.alert("registration sucussefull");

      navigate("/Login");
    }
  };
  return (
    <div className="parent-form">
      <div className="form">
        <h1>SignUp</h1>
        <br />

        <form action="">
          <label htmlFor="">EnterName:</label>
          <input
            type="email"
            placeholder="EnterName"
            className="input"
            onChange={(e) => {
              setstate1(e.target.value);
            }}
            name="name"
            value={state1}
          />{" "}
          <br />
          <br />
          <label htmlFor="">EnterEmail:</label>
          <input
            type="email"
            placeholder="EnterEmail"
            className="input"
            onChange={(e) => {
              setstate2(e.target.value);
            }}
            name="name"
            value={state2}
          />{" "}
          <br />
          <br />
          <label htmlFor="">EnterPassword:</label>
          <input
            type="password"
            placeholder="EnterPassword"
            className="input"
            onChange={(e) => {
              setstate3(e.target.value);
            }}
            name="name"
            value={state3}
          />{" "}
          <br />
          <br />
          <button onClick={signUp} className="signup-btn">
            SignUp
          </button>
          <br />
          <br />
          <b>if already registerd ? click login</b> &nbsp;{" "}
          <Link to="/login">
            <button className="signup-btn">LogIn</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
