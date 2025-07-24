import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./Register.module.css";

const Register = () => {
  const [creds, setCreds] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  function submit(e) {
    e.preventDefault();
    const isValid = checkUsername(creds.username);
    if (!isValid) return;

    const users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];

    localStorage.setItem("users", JSON.stringify(users.concat(creds)));
    setCreds({ firstName: "", lastName: "", username: "", password: "" });
  }

  function checkUsername(value) {
    const users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];
    const isAlredyExists = users.find((user) => user.username === value);
    if (isAlredyExists) {
      setError("The username is already taken!");
      return false;
    } else {
      setError("");
      return true;
    }
  }

  function handleChange(e) {
    setCreds({ ...creds, [e.target.name]: e.target.value });
    checkUsername(e.target.value);
  }

  return (
    <div className={s.reg}>
      <div className={s.register}>Register</div>
      <br />
      <form className={s.form} onSubmit={submit}>
        <span className={s.error}>{error}</span>
        <input
          name="firstName"
          value={creds.firstName}
          onChange={handleChange}
          placeholder="First name"
        ></input>
        <input
          name="lastName"
          value={creds.lastName}
          onChange={handleChange}
          placeholder="Last name"
        ></input>
        <input
          name="username"
          value={creds.username}
          onChange={handleChange}
          type="text"
          placeholder="Username"
        ></input>
        <input
          name="password"
          value={creds.password}
          onChange={handleChange}
          placeholder="Password"
          type="password"
        ></input>
        <br />
        <button type="submit">Submit</button>
        <p>
          Already registered?{" "}
          <NavLink className={s.sign} to="/signIn">
            sign in
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default Register;
