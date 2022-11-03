import { useEffect, useState } from "react";
import { api } from "../../services/api";

import "../../assets/css/form.css";

export default function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const submit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await api.get(`/users?email=${email}`);

      if (
        response.data.length > 0 &&
        response.data[0].password === "password"
      ) {
        localStorage.setItem("data", JSON.stringify(response.data));
      } else {
        alert("big problems");
      }
    } catch (error) {}
  };

  useEffect(() => {
    const data = localStorage.getItem("data");
    if (data) {
     const parsedData = JSON.parse(data);
     if(parsedData.length > 0) {
      setIsAuthenticated(true)
     }
    }



  }, []);

  return (
    <div className="form-container">
      <h1>C.G.Shop</h1>
      <form onSubmit={submit}>
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
    </div>
  );
}
