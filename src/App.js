import Routing from "./routing"
import "./styles/global-styles.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductsContextProvider from './contexts/products'; 

function App() {
  return (
      <ProductsContextProvider>
        <ToastContainer/>
        <Routing/>
      </ProductsContextProvider>
  );
}

export default App;
