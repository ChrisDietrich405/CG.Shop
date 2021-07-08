import "./styles.css"
import { FaShoppingCart, FaSearch, FaHeart } from "react-icons/fa"
import { CgProfile } from "react-icons/cg"; 
import { Link } from "react-router-dom"
import { useContext } from 'react'; //useContext is a hook 
import { ProductsContext } from '../../contexts/products'
import SearchInput from "../SearchInput"
//hooks can only be called inside of a component 
//createContext and useContext work together and are necessary for each other 

export default function Header() {
    const { handleHeaderSearchInput } = useContext(ProductsContext);
    // we are extracting the one function from Products Context

    // const context =  useContext(ProductsContext);
    // console.log(context)
    //if we do it this way we will have all the functions, arrays, objects, etc..(all the information)
    // from the ProductsContext
    
    return (
        
        <div className="header-container">
            <div className="header-logo">
                <Link to="/">
                    <FaShoppingCart size={40}/>
                </Link>
                <span>G.C. Shop</span>
            </div>
            <SearchInput onChange={handleHeaderSearchInput} placeholder="Search Smartphones"/>
            <div className="header-buttons">
                <Link to="/favorites">
                    <FaHeart />
                    <span>Wishlist</span>
                </Link>
                <CgProfile />
                <span>Login</span>  
            </div>

        </div>        
    )
}