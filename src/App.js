import Home from "./pages/Home"
import "./styles/global-styles.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header"

function App() {
  return (
    <div className="App">
    <Header/>
    <ToastContainer/>
    <Home/>
    </div>
  );
}

export default App;
