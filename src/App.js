//RESPONSIVITY
// in cell view make cards wider on home page
// add Create account to hamburger menu
// get rid of the hamburger menu add the search bar to the bottom and make it bigger
//and put the three links at the top
//add top margin to the title on home page

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
