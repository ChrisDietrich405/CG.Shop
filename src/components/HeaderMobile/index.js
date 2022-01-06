import "./styles.css";
import { FaShoppingCart, FaSearch, FaHeart } from "react-icons/fa";
import { CgProfile, CgMenu } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useContext } from "react"; //useContext is a hook
import { ProductsContext } from "../../contexts/products";
import { useState } from "react";
import SearchInput from "../SearchInput";

export default function HeaderMobile() {
  const { handleHeaderSearchInput } = useContext(ProductsContext);
  const [isBtnVisible, setIsBtnVisible] = useState(false); //not visible

  const toggleBtns = () => {
    //if the toggleBtns function is executed the elements beneath are visible
    setIsBtnVisible(!isBtnVisible);
  };
  //Everything inside of the JSX is considered truthy
  return (
    <div className="mobile-container">
      <div className="mobile-menu">
        <Link to="/">
          <FaShoppingCart size={40} />
        </Link>
        <SearchInput onChange={handleHeaderSearchInput} placeholder="Search" />
        <CgMenu onClick={toggleBtns} size={40} />
      </div>
      {/* conditional rendering */}
      {/* if is isBtnVisible is true then continue with the code,
            if it is false than don't continue */}
      {isBtnVisible && (
        <div className="mobile-navigation">
          <Link to="/favorites">
            <FaHeart />
            <span>Wishlist</span>
          </Link>
          <Link to="/create-account">
            <CgProfile />
            <span>Login</span>
          </Link>
          <Link to="/signin">
            <CgProfile />
            <span>Create Account</span>
          </Link>
        </div>
      )}
    </div>
  );
}

//logical operators include ||, &&, <, >, =. logical operators return a boolean value to me
//with the and operator there needs to be two statements and they both need to be truthy
