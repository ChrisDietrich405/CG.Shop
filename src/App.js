import Home from "./pages/Home"
import "./styles/global-styles.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
    <ToastContainer/>
    <Home/>
    </div>
  );
}

export default App;
