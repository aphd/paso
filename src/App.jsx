import React, { Component } from "react";
import PasoGui from "./components/paso-gui/";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Switch>
                        <Route path="/" component={PasoGui} exact />
                        {/* <Route component={Error} /> */}
                    </Switch>
                </div>
            </Router>
        );
    }
}
