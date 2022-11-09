import { FaSearch } from "react-icons/fa";
import { useContext } from "react"

import { ProductsContext, IProductsContext } from "../../contexts/products";

import "./styles.css";

interface SearchInputProps {
  placeholder: string; 
}

export default function SearchInput({ placeholder } : SearchInputProps) {
  const { handleHeaderSearchInput } = useContext<IProductsContext>(ProductsContext)

  return (
    <div className="search-bar">
      <input type="text" placeholder={placeholder} onChange={handleHeaderSearchInput} />
      <FaSearch />
    </div>
  );
}
