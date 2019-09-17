import React, { Component } from "react";
import "./App.css";
import { Helmet } from "react-helmet";
import Form from "./components/form";
import Metrics from "./components/metrics";
import { parseSol } from "./utils/parse-sol";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    handleFormSubmit = sc_code => {
        this.setState({ metric: parseSol(sc_code) });
        console.log(this);
    };
    render = () => {
        return (
            <main className="container">
                <Helmet>
                    <title>SOLPAR</title>
                </Helmet>
                <Form onFormSubmit={this.handleFormSubmit} />
                <Metrics metric={this.state.metric} />
            </main>
        );
    };
}

export default App;
