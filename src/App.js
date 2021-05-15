import Home from "./pages/Home"
import "./styles/global-styles.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header";
import ProductsContextProvider from './contexts/products'; 

function App() {
  return (
    <div className="App">
      <ProductsContextProvider>
        <Header/>
        <ToastContainer/>
        <Home/>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
