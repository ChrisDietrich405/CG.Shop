import React from "react";
import ReactDOM from "react-dom";
import App from "./App";


ReactDOM.render(
  <React.StrictMode>
    <App />  
    {/* the app component is being rendered in the root div of the index.html (inside the public folder)  */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

