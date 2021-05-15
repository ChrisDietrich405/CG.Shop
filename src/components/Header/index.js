import "./styles.css"
import { FaShoppingCart, FaSearch, FaHeart } from "react-icons/fa"
import { CgProfile } from "react-icons/cg"; 
import { useContext } from 'react'; 
import { ProductsContext } from '../../contexts/products'

export default function Header() {
    const { handleHeaderSearchInput } = useContext(ProductsContext);

    return (
        
        <div className="header-container">
            <div className="header-logo">
                <FaShoppingCart size={40}/>
                <span>G.C. Shop</span>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search Smartphones" onChange={handleHeaderSearchInput}/>
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