import { useState } from "react";

import "../../assets/css/form.css";

export default function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const submit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="form-container">
      <h1>C.G.Shop</h1>
      <form onSubmit={submit}>
        <h3 className="signin">Log In</h3>
        <label htmlFor="email">
          <p className="email">Email or Phone Number</p>
          <input type="text" id="name" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label htmlFor="password">
          <div className="password-container">
            <span className="password">Password</span>
            <span className="forgot-password">Forgot Password?</span>
          </div>

          <input
            type="text"
            placeholder=""
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="password-minimum">(At least 6 characters)</p>
        </label>
        <button type="submit" className="create-account-sign-in-btn">
          Log In
        </button>
      </form>
    </div>
  );
}
