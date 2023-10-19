import { Switch, Route } from "react-router-dom";
import { useContext } from "react";

import Home from "../pages/Home";
import Favorites from "../pages/Favorites";
import CreateAccount from "../components/CreateAccount";
import Login from "../components/Login";
import Header from "../components/Header";
import HeaderMobile from "../components/HeaderMobile";
import { DimensionContext } from "../contexts/dimensions";

export default function Routing() {
  const { isMobile } = useContext(DimensionContext);
  return (
    <div className="routing">
  
        {isMobile ? <HeaderMobile /> : <Header />}
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/favorites" component={Favorites}></Route>         
          <Route path="/create-account" component={CreateAccount}></Route>
          <Route pat="/login" component={Login}></Route>
        </Switch>

    </div>
  );
}
