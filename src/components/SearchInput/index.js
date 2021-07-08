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

// export default function SearchInput(props) {
//     return (
//         <div className="search-bar">
//             <input type="text" placeholder={props.placeholder} onChange={props.onChange}/>
//             <FaSearch/>  
//         </div>
//     )
// }