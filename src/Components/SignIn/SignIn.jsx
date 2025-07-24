import { useState } from "react";
import { useNavigate } from "react-router-dom";
import s from "./SignIn.module.css";

const SignIn = () => {
  const [creds, setCreds] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  function checkUser(username, password) {
    const users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];

    const founded = users.find((user) => user.username === username);
    if (!founded) {
      setMessage("Invalid username!");
      return;
    }
    if (founded.password !== password) {
      setMessage("Invalid password!");
      return;
    }

    setMessage("");
    localStorage.setItem("currentUser", JSON.stringify(founded));
    return true;
  }

  function signIn() {
    const isValid = checkUser(creds.username, creds.password);
    if (!isValid) {
      return;
    }

    setCreds({ username: "", password: "" });
    navigate("/list");
  }

  function handleChange(e) {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  }

  return (
    <div className={s.signIn}>
      <p className={s.text}>Sign In</p>
      <span className={s.error}>{message}</span>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Username"
        name="username"
      />
      <input
        onChange={handleChange}
        type="password"
        placeholder="Password"
        name="password"
      />
      <button onClick={signIn}>Sign In</button>
    </div>
  );
};

export default SignIn;
