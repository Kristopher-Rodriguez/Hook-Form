import React, { useState } from "react";

const UserForm = (props) => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPw, setConfirmPw] = useState("");

  return (
    <div>
      <form>
        <div>
          <label>First Name: </label>
          <input
            type="text"
            value={first}
            onChange={(e) => setFirst(e.target.value)}
          />
        </div>
        <div>
          <label>Last Name: </label>
          <input
            type="text"
            value={last}
            onChange={(e) => setLast(e.target.value)}
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Confirm Password: </label>
          <input
            type="text"
            value={confirmPw}
            onChange={(e) => setConfirmPw(e.target.value)}
          />
        </div>
      </form>
      <div>
        <h2>Your Form Data</h2>
        <p>First Name: {first} </p>
        <p>Last Name: {last} </p>
        <p>Email: {email} </p>
        <p>Password: {password} </p>
        <p>Confirm Password: {confirmPw} </p>
      </div>
    </div>
  );
};

export default UserForm;
