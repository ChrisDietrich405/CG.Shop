import { useState, useContext } from "react";
import { UserContext, IUserContext } from "../../contexts/users";
// import { ProductsContext, IProductsContext } from "../../contexts/products";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../../assets/css/form.css";

import "./styles.css";

export default function Login() {
  const { user, isAuthenticated, handleLogin, handleLogout, loading } =
    useContext<IUserContext>(UserContext);

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleLogin(username, password);
    setUsername("");
    setPassword("");
  };

  return (
    <div className="form-container">
      <ToastContainer />
      {isAuthenticated ? (
        <>
          <h1>Welcome {user.name} to C.G.Shop!</h1>
          <div className="profile-container">
            <img src={user.image} alt="profile" />
            <div>
              <p>
                <strong>Name:</strong>
                {user.name}
              </p>
              <p>
                <strong>Email:</strong>
                {user.email}
              </p>
              <p>
                <strong>Telephone:</strong>
                {user.phone}
              </p>
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
            <label htmlFor="username">
              <p className="username">Email</p>
              <input
                disabled={loading}
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label htmlFor="password">
              <div className="password-container">
                <span className="password">Password</span>
                <span className="forgot-password">Forgot Password?</span>
              </div>

              <input
                disabled={loading}
                type="text"
                placeholder=""
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="password-minimum">(At least 6 characters)</p>
            </label>
            <button
              disabled={loading}
              type="submit"
              className="create-account-sign-in-btn"
            >
              {loading ? "Page Loading" : "Log In"}
            </button>
          </form>
        </>
      )}
    </div>
  );
}

// import { useState } from "react";

// import "../../assets/css/form.css";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const addEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const addPassword = (e) => {
//     setPassword(e.target.value);
//   };

//   const submit = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <div className="form-container">
//       <h1>C.G.Shop</h1>
//       <form onSubmit={submit}>
//         <h3 className="signin">Log In</h3>
//         <label htmlFor="email">
//           <p className="email">Email or Phone Number</p>
//           <input type="text" id="name" value={email} onChange={addEmail} />
//         </label>
//         <label htmlFor="password">
//           <div className="password-container">
//             <span className="password">Password</span>
//             <span className="forgot-password">Forgot Password?</span>
//           </div>

//           <input
//             type="text"
//             placeholder=""
//             id="password"
//             value={password}
//             onChange={addPassword}
//           />
//           <p className="password-minimum">(At least 6 characters)</p>
//         </label>
//         <button type="submit" className="create-account-sign-in-btn">
//           Log In
//         </button>
//       </form>
//     </div>
//   );
// }
