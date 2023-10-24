import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoCreateOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useContext } from "react";

import { UserContext, IUserContext } from "../../contexts/users";
import SearchInput from "../SearchInput";

import "./styles.css";

export default function Header() {
  const { user, isUserLoggedIn, handleLogout } =
    useContext<IUserContext>(UserContext);

  return (
    <div className="header-container">
      <div className="header-logo">
        <Link to="/">
          <FaShoppingCart size={40} style={{ color: "white" }} />
        </Link>
        <span>C.G. Shop</span>
      </div>
      <SearchInput placeholder="Search Smartphones" />
      <div className="header-buttons">
        <Link to="/favorites">
          <FaHeart />
          <span>Wishlist</span>
        </Link>

        {isUserLoggedIn ? (
          <span>{user.name}</span> && (
            <button
              className="create-account-sign-in-btn"
              onClick={handleLogout}
            >
              Log Out
            </button>
          )
        ) : (
          <Link to="/login">
            <CgProfile />
            <span>Log in</span>
          </Link>
        )}

        {!isUserLoggedIn && (
          <Link to="/create-account">
            <IoCreateOutline />
            <span>Create Account</span>
          </Link>
        )}
      </div>
    </div>
  );
}
