import React, { Component } from "react";
import "./App.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Form from "./components/form";
import Metrics from "./components/metrics";
import Error from "./components/error";
import { parseSol } from "./utils/parse-sol";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    handleFormSubmit = sc_code => {
        try {
            this.setState({
                metric: parseSol(sc_code),
                errors: null
            });
        } catch (error) {
            this.setState({
                metric: null,
                errors: error.errors
            });
        }
    };
    render = () => {
        return (
            <main className="container">
                <HelmetProvider>
                    <Helmet>
                        <title>SOL-PA</title>
                    </Helmet>
                </HelmetProvider>
                <Form onFormSubmit={this.handleFormSubmit} />
                <Metrics metric={this.state.metric} />
                <Error errors={this.state.errors} />
            </main>
        );
    };
}

export default App;
