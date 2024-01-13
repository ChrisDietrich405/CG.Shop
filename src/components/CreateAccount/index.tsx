import { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import "../../assets/css/form.css";
import axios from "axios";

export default function CreateAccount() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const history = useHistory();

  const submit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      const newUser = {
        name,
        phone,
        email,
        password,
      };
      await axios.post(`${process.env.REACT_APP_CREATE_USER_URL}`, newUser);

      toast.info("You're added");
      history.push("/login");
    } catch (error: any) {
      let message = "Error while creating new user. Try again later";
      console.log(error, error.response);
      if (error.response.data.message) {
        message = error.response.data.message;
      }
      toast.error(message);
    }
  };

  return (
    <div className="form-container">
      <h1>C.G.Shop</h1>
      <form onSubmit={submit}>
        <h3 className="create-account">Create account</h3>
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="phone">
          Phone
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          Password
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
          Create an account
        </button>
      </form>
    </div>
  );
}
