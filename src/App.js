import Routing from "./routing"
import "./styles/global-styles.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductsContextProvider from './contexts/products'; 
import DimensionProvider from "./contexts/dimensions";


function App() {
  return (
    <DimensionProvider>
      <ProductsContextProvider>
        <ToastContainer position="bottom-right" />
        <Routing/>
      </ProductsContextProvider>
    </DimensionProvider>
  );
}

export default App;
