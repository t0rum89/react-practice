import React, { useState } from "react";
import Input from "./Input";

const Form = ({ children, ...props }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [usernameDirty, setUsernameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [password2Dirty, setPassword2Dirty] = useState(false);

  const [usernameError, setUsernameError] = useState(
    "The field cannot be empty"
  );
  const [emailError, setEmailError] = useState("The field cannot be empty");
  const [passwordError, setPasswordError] = useState(
    "The field cannot be empty"
  );
  const [password2Error, setPassword2Error] = useState(
    "The field cannot be empty"
  );

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Incorrect email");
    } else {
      setEmailError("");
    }
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 8) {
      setPasswordError("Больше 3 и меньше 8");
      if (!e.target.value) {
        setPasswordError("The field cannot be empty");
      }
    } else {
      setPasswordError("");
    }
  };
  const password2Handler = (e) => {
    setPassword2(e.target.value);
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "username":
        console.log(e.target.value);
        setUsernameDirty(true);
        break;
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
      case "password2":
        setPassword2Dirty(true);
        break;
    }
  };

  return (
    <form>
      {usernameDirty && usernameError && (
        <div style={{ color: "red" }}>{usernameError}</div>
      )}
      <Input
        onChange={(e) => usernameHandler(e)}
        value={username}
        onBlur={(e) => blurHandler(e)}
        text="Username"
        type="text"
        placeholder="Enter username"
        name="username"
      />

      {emailDirty && emailError && (
        <div style={{ color: "red" }}>{emailError}</div>
      )}
      <Input
        onChange={(e) => emailHandler(e)}
        value={email}
        onBlur={(e) => blurHandler(e)}
        text="Email address"
        type="email"
        placeholder="Enter e-mail"
        name="email"
      />

      {passwordDirty && passwordError && (
        <div style={{ color: "red" }}>{passwordError}</div>
      )}
      <Input
        onChange={(e) => passwordHandler(e)}
        value={password}
        onBlur={(e) => blurHandler(e)}
        text="Password"
        type="password"
        placeholder="Enter password"
        name="password"
      />

      {password2Dirty && password2Error && (
        <div style={{ color: "red" }}>{password2Error}</div>
      )}
      <Input
        onChange={(e) => password2Handler(e)}
        value={password2}
        onBlur={(e) => blurHandler(e)}
        text="Confirm password"
        type="password"
        placeholder="Confirm password"
        name="password2"
      />
    </form>
  );
};

export default Form;
