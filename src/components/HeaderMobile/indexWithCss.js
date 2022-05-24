import { FaShoppingCart, FaSearch, FaHeart } from "react-icons/fa";
import { CgProfile, CgMenu } from "react-icons/cg";
import { Link } from "react-router-dom";

import "./styles.css";

export default function HeaderMobile() {
  const toggleBtns = () => {
    const mobileNav = document.querySelector(".mobile-navigation");
    if (mobileNav.classList.contains("hidden")) {
      mobileNav.classList.remove("hidden");
    } else {
      mobileNav.classList.add("hidden");
    }
  };

  return (
    <div className="mobile-container">
      <div className="mobile-menu">
        <Link to="/">
          <FaShoppingCart size={40} />
        </Link>
        <CgMenu onClick={toggleBtns} size={40} />
      </div>

      <div className="mobile-navigation">
        <Link to="/favorites">
          <FaHeart />
          <span>Wishlist</span>
        </Link>
        <CgProfile />
        <span>Login</span>
      </div>
    </div>
  );
}
