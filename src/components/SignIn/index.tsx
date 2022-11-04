import { useState, useContext } from "react";
import { UserContext, IUserContext } from "../../contexts/users";
import "../../assets/css/form.css";

import "./styles.css"

export default function SignIn() {
  const { user, isAuthenticated, handleLogin, handleLogout } =
    useContext<IUserContext>(UserContext);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <div className="form-container">
      {isAuthenticated ? (
        <>
          <h1>Welcome {user.name} to C.G.Shop!</h1>
          <div className="profile-container">
            <img src={user.image} alt="" />
            <div>
              <p><strong>Name:</strong>{user.name}</p>
              <p><strong>Email:</strong>{user.email}</p>
              <p><strong>Telephone:</strong>{user.phone}</p>
            </div>
          </div>
          <div style={{ width: "200px", margin: "0 auto" }}>
            <button
              className="create-account-sign-in-btn"
              onClick={handleLogout}
            >
              Log Out
            </button>
          </div>
        </>
      ) : (
        <>
          <h1>C.G.Shop</h1>
          <form onSubmit={handleSubmit}>
            <h3 className="signin">Log In</h3>
            <label htmlFor="email">
              <p className="email">Email or Phone Number</p>
              <input
                type="text"
                id="name"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
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
        </>
      )}
    </div>
  );
}
