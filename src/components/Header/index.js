import "./styles.css"
import { FaShoppingCart, FaSearch, FaHeart } from "react-icons/fa"
import { CgProfile } from "react-icons/cg"; 
import { Link } from "react-router-dom"
import { useContext } from 'react'; //useContext is a hook 
import { ProductsContext } from '../../contexts/products'
import SearchInput from "../SearchInput"

export default function Header() {
    const { handleHeaderSearchInput } = useContext(ProductsContext);
    
    return (
        
        <div className="header-container">
            <div className="header-logo">
                <Link to="/">
                    <FaShoppingCart size={40}/>
                </Link>
                <span>C.G. Shop</span>
            </div>
            <SearchInput onChange={handleHeaderSearchInput} placeholder="Search Smartphones"/>
            <div className="header-buttons">
                <Link to="/favorites">
                    <FaHeart />
                    <span>Wishlist</span>
                </Link>
                <Link to="/sign-in">
                    <CgProfile />
                    <span>Login</span> 
                </Link>
                
                
            </div>

        </div>        
    )
}