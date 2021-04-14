import { React } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboad";

export default function AppRouter(props) {
    return(
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Dashboard/>
                </Route>
            </Switch>
        </Router>
    )
}