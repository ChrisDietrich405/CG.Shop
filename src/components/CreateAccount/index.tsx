import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { api } from "../../services/api";

import "../../assets/css/form.css";

export default function CreateAccount() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const submit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      if (password.length < 6) {
        return toast.error("Password needs to be at least 6 characters");
      }
      const newUser = {
        name,
        phone,
        email,
        password,
        image,
      };
      await api.post("/users", newUser);
      toast.success("You're now added");
    } catch (err) {
      toast.error("Error while creating new user. Try again later");
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
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="image">
          Image Url
          <input
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
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
