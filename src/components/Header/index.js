import "./styles.css"
import { FaShoppingCart, FaSearch, FaHeart } from "react-icons/fa"
import { CgProfile } from "react-icons/cg"
export default function Header() {
    return (
        
        <div className="header-container">
            <div className="header-logo">
                <FaShoppingCart size={40}/>
                <span>G.C. Shop</span>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search Smartphones" />
                <FaSearch/>
                
            </div>
            <div className="header-buttons">
                <FaHeart size={25}/>
                <span>Wishlist</span>
                <CgProfile size={25}/>
                <span>Login</span>
                
            </div>

        </div>
        
        
    )
}