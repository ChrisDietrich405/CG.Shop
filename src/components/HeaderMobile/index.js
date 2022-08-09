import { useState } from "react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { CgProfile, CgMenu } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useContext } from "react";

import { ProductsContext } from "../../contexts/products";
import SearchInput from "../SearchInput";

import "./styles.css";

export default function HeaderMobile() {
  const { handleHeaderSearchInput } = useContext(ProductsContext);
  const [isBtnVisible, setIsBtnVisible] = useState(false);

  const toggleBtns = () => {
    setIsBtnVisible(!isBtnVisible);
  };

  return (
    <div className="mobile-container">
      <div className="mobile-menu">
        <Link to="/">
          <FaShoppingCart size={40} />
        </Link>
        <SearchInput onChange={handleHeaderSearchInput} placeholder="Search" />
        <CgMenu onClick={toggleBtns} size={40} />
      </div>

      {isBtnVisible && (
        <div className="mobile-navigation">
          <Link to="/favorites">
            <FaHeart />
            <span>Wishlist</span>
          </Link>
          <Link to="/signin">
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
