import React, { useState } from "react";
import UsersRegistered from "../UsersRegistered/UsersRegistered";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registeredUsers, setRegisteredUsers] = useState([]);

  const handleChangeFullName = (event) => {
    setFullName(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const addNewUser = (event) => {
    event.preventDefault();

    const newUser = {
      fullName: fullName,
      email: email,
      password: password,
    };

    setRegisteredUsers([...registeredUsers, newUser]);

    setFullName("");
    setEmail("");
    setPassword("");
  };

  const clearUsers = () => [
    setRegisteredUsers([])
  ]


  return (
    <div className="form-container">
      <h1>Registration Form</h1>
      <form onSubmit={addNewUser} className="form">
        <label htmlFor="fullname"></label>
        <input
          placeholder="Full Name"
          required
          type="text"
          id="fullname"
          value={fullName}
          onChange={handleChangeFullName}
        />
        <label htmlFor="email"></label>
        <input
          placeholder="Email"
          required
          type="email"
          id="email"
          value={email}
          onChange={handleChangeEmail}
        />
        <label htmlFor="password"></label>
        <input
          placeholder="Password"
          required
          minLength={6}
          type="password"
          value={password}
          onChange={handleChangePassword}
        />
        <input className="button" type="submit" value="Submit" />
      </form>
      <div>
          <UsersRegistered
            registeredUsers = {registeredUsers}
            clearUsers={clearUsers}
          />
      </div>
    </div>
  );
};

export default RegistrationForm;