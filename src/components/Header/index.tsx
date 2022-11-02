import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoCreateOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useContext } from "react";

import { ProductsContext, IProductsContext } from "../../contexts/products";
import SearchInput from "../SearchInput";


import "./styles.css";

export default function Header() {
  const { handleHeaderSearchInput } = useContext<IProductsContext>(ProductsContext);

  return (
    <div className="header-container">
      <div className="header-logo">
        <Link to="/">
          <FaShoppingCart size={40} style={{ color: "white" }} />
        </Link>
        <span>C.G. Shop</span>
      </div>
      <SearchInput
        onChange={handleHeaderSearchInput}
        placeholder="Search Smartphones"
      />
      <div className="header-buttons">
        <Link to="/favorites">
          <FaHeart />
          <span>Wishlist</span>
        </Link>
        <Link to="/sign-in">
          <CgProfile />
          <span>Login</span>
        </Link>
        <Link to="/create-account">
          <IoCreateOutline />
          <span>Create Account</span>
        </Link>
      </div>
    </div>
  );
}
