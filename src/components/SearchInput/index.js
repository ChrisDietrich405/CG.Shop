import { FaSearch } from "react-icons/fa"
import "./styles.css"

export default function SearchInput({onChange, placeholder}) {
    return (
        <div className="search-bar">
            <input type="text" placeholder={placeholder} onChange={onChange}/>
            <FaSearch/>  
        </div>
        
    )
}

