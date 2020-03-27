import React, { Component } from "react";
import PasoGui from "./components/paso-gui/";
import PageNotFound from "./components/page-not-found";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Switch>
                        <Route path="/" component={PasoGui} exact />
                        <Route component={PageNotFound} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
