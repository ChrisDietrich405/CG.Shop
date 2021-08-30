import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { useContext } from "react"
import Home from "../pages/Home"
import Favorites from "../pages/Favorites"
import CreateAccount from "../components/CreateAccount"
import SignIn from "../components/SignIn"
import Header from "../components/Header";
import HeaderMobile from "../components/HeaderMobile"
import {DimensionContext} from "../contexts/dimensions"
//we use curly brackets for named exports (named exports is when you don't have the export default, just export)
//the default export gives  you the power to change the name
export default function Routing() {
    const {isMobile} = useContext(DimensionContext) //DimensionContext is just providing the context from the Dimension Context
    return (                                        //it's not the default value 
        <div className="routing">
            <Router>
           { isMobile ? <HeaderMobile /> : <Header/> } 
                <Switch> 
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/favorites" component={Favorites}></Route>
                    <Route path="/create-account" component={CreateAccount}></Route>
                    <Route pat="/sign-in" component={SignIn}></Route>
                </Switch>
            </Router>
        </div>
    )
}