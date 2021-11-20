import React, { Component } from "react";
import MetricForm from "./metric-form";
import LoadContractForm from "./load-contract-form";
import Metrics from "./metrics";
import Head from "./head";
import Bibtex from "./bibtex";
import Error from "./error";
import { solParse } from "../../utils/sol-parser";

export default class PasoGui extends Component {
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
                <Bibtex />
            </main>
        );
    };
}
