import React, { Component } from "react";
import "./App.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import MetricForm from "./components/metric-form";
import LoadContractForm from "./components/load-contract-form";
import Metrics from "./components/metrics";
import Error from "./components/error";
import { solParse } from "./utils/sol-parser";
import { getContract } from "./utils/getContract";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    handleFormSubmit = data_input => {
        getContract(data_input).then(data => {
            try {
                this.setState({
                    metric: solParse(data),
                    errors: null
                });
            } catch (error) {
                this.setState({
                    metric: null,
                    errors: error.errors
                });
            }
        });
    };
    handleLoadContractFormSubmit = address => {
        console.log(address);
    };
    render = () => {
        return (
            <main className="container">
                <HelmetProvider>
                    <Helmet>
                        <title>SOL-PA</title>
                    </Helmet>
                </HelmetProvider>
                <LoadContractForm
                    onFormSubmit={this.handleLoadContractFormSubmit}
                />
                <MetricForm onFormSubmit={this.handleFormSubmit} />
                <Metrics metric={this.state.metric} />
                <Error errors={this.state.errors} />
            </main>
        );
    };
}

export default App;
