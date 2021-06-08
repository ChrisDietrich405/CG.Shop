import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Home from "../pages/Home"
import Favorites from "../pages/Favorites"
import Header from "../components/Header";

export default function Routing() {
    return (
        <div className="routing">
            <Router>
            <Header/> 
                <Switch> 
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/favorites" component={Favorites}></Route>
                </Switch>
            </Router>
        </div>
    )
}