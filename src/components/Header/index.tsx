import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoCreateOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useContext } from "react";

import { UserContext, IUserContext } from "../../contexts/users";
import SearchInput from "../SearchInput";

import "./styles.css";

export default function Header() {
  const { user, isAuthenticated } = useContext<IUserContext>(UserContext);

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

        <Link to="/login">
          <CgProfile />
          <span>{isAuthenticated ? user.name : "Log In"}</span>
        </Link>

        {!isAuthenticated && (
          <Link to="/create-account">
            <IoCreateOutline />
            <span>Create Account</span>
          </Link>
        )}
      </div>
    </div>
  );
}
