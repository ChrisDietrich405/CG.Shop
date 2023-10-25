import { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { api } from "../../services/api";

import "../../assets/css/form.css";

export default function CreateAccount() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const history = useHistory();

  const submit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      const newUser = {
        name,
        phone,
        email,
        password,
        image,
      };

      await api.post("/cgshopbackend-f143a/us-central1/createclient", newUser);

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
        {image && <img src={image} alt="user" />}
        <button type="submit" className="create-account-sign-in-btn">
          Create an account
        </button>
      </form>
    </div>
  );
}
