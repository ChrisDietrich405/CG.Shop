import { useState } from "react";

import "../../assets/css/form.css";

export default function CreateAccount() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const addName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const addEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const addPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const submit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="form-container">
      <h1>C.G.Shop</h1>
      <form onSubmit={submit}>
        <h3 className="create-account">Create account</h3>
        <label htmlFor="name">
          Name
          <input type="text" id="name" value={name} onChange={addName} />
        </label>
        <label htmlFor="email">
          Email
          <input type="text" id="email" value={email} onChange={addEmail} />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="text"
            placeholder=""
            id="password"
            value={password}
            onChange={addPassword}
          />
          <p className="password-minimum">(At least 6 characters)</p>
        </label>
        <button type="submit" className="create-account-sign-in-btn">
          Create an account
        </button>
      </form>
    </div>
  );
}
