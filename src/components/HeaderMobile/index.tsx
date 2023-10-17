import { useState } from "react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { CgProfile, CgMenu } from "react-icons/cg";
import { Link } from "react-router-dom";

import SearchInput from "../SearchInput";

import "./styles.css";

export default function HeaderMobile() {
  const [isBtnVisible, setIsBtnVisible] = useState<boolean>(false);

  const toggleBtns = () => {
    setIsBtnVisible(!isBtnVisible);
  };

  return (
    <div className="mobile-container">
      <div className="mobile-menu">
        <Link to="/">
          <FaShoppingCart size={40} />
        </Link>
        <SearchInput placeholder="Search" />
        <CgMenu onClick={toggleBtns} size={40} />
      </div>

      {isBtnVisible && (
        <div className="mobile-navigation">
          <Link to="/favorites">
            <FaHeart />
            <span>Wishlist</span>
          </Link>
          <Link to="/login">
            <CgProfile />
            <span>Login</span>
          </Link>
          <Link to="/create-account">
            <CgProfile />
            <span>Create Account</span>
          </Link>
        </div>
      )}
    </div>
  );
}
