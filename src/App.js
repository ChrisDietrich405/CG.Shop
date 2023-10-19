import { Helmet } from "react-helmet";
import { ToastContainer } from "react-toastify";

import ProductsContextProvider from "./contexts/products";
import DimensionProvider from "./contexts/dimensions";
import { UserProvider } from "./contexts/users";
import Routing from "./routing";

import "react-toastify/dist/ReactToastify.css";
import "./styles/global-styles.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Helmet>
        <link
          rel="icon"
          type="image/png"
          href="./assets/images/favicon.ico"
          sizes="16x16"
        />
        <meta charSet="utf-8" />
        <title>CG Shop</title>
        <meta name="CG Shop Title" content="Helmet application" />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <ToastContainer position="top-right" />
      <Router>
        <DimensionProvider>
          <ProductsContextProvider>
            <UserProvider>
              <Routing />
            </UserProvider>
          </ProductsContextProvider>
        </DimensionProvider>
      </Router>
    </div>
  );
}

export default App;
