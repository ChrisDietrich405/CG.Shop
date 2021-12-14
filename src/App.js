//increase the size of the search input
//wishlist page items are cut off
//sign in page increase size of password and forgot password to the size of Email
//and the at least 6 characters can be the size of what the password was
//put Sign in in the center

//create account page - shorten the name to create account
//increase font size in the create account button and also make it bold
//when user types name there needs to be some padding left
//reduce the space below the create account button by half

import Routing from "./routing";
import "./styles/global-styles.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductsContextProvider from "./contexts/products";
import DimensionProvider from "./contexts/dimensions";
import { Helmet } from "react-helmet";

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
          <Routing />
        </ProductsContextProvider>
      </DimensionProvider>
    </div>
  );
}

export default App;
