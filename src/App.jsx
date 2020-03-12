import React, { Component } from "react";
import "./App.css";
import MetricForm from "./components/metric-form";
import LoadContractForm from "./components/load-contract-form";
import Metrics from "./components/metrics";
import Error from "./components/error";
import Head from "./components/head";
import { solParse } from "./utils/sol-parser";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleFormSubmit = data_input => {
        try {
            this.setState({
                metric: solParse(data_input)
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
                <Head />
                <LoadContractForm />
                <MetricForm onFormSubmit={this.handleFormSubmit} />
                <Metrics metric={this.state.metric} />
                <Error errors={this.state.errors} />
            </main>
        );
    };
}
