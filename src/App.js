//forgot password for sign up on the same line as password
//email or phone number instead of name 
//button needs to be a default different color the navbar color
//button needs to be same width as inputs 
//add create account button the create button should be distinct and have a darker color
//delete create account button on sign in page
//increase the size of the search input 



import Routing from "./routing"
import "./styles/global-styles.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductsContextProvider from './contexts/products'; 
import DimensionProvider from "./contexts/dimensions";
import {Helmet} from "react-helmet";


function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>CG Shop</title>
        <meta name="CG Shop Title" content="Helmet application" />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet> 
      <DimensionProvider>
        <ProductsContextProvider>
          <ToastContainer position="bottom-right" />
          <Routing/>
        </ProductsContextProvider>
      </DimensionProvider>
    </div>
  );
}

export default App;
