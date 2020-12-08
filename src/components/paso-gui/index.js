import React, { Component } from "react";
import MetricForm from "./metric-form";
import LoadContractForm from "./load-contract-form";
import Metrics from "./metrics";
import Head from "./head";
import Error from "./error";
import { solParse, getAST } from "../../utils/sol-parser";

export default class PasoGui extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.plotId = "tree-diagram";
    }

    handleFormSubmit = (data_input) => {
        try {
            this.setState({
                metric: solParse(data_input),
            });
        } catch (error) {
            this.setState({
                metric: null,
                errors: error.errors,
            });
        }
    };
    updateTree = (data_input) => {
        const VTree = window.VTree;
        var container = document.getElementById(this.plotId);
        container.innerHTML = "";
        const vt = new VTree(container);
        var reader = new VTree.reader.Object();
        const data = reader.read(getAST(data_input).children);

        vt.data(data).update();
    };
    componentDidMount() {
        let script = document.createElement("script");
        script.src = "https://d3js.org/d3.v3.min.js";
        script.async = true;
        document.body.appendChild(script);
        script = document.createElement("script");
        script.src = "https://vanya.jp.net/vtree/dist/vtree.js";
        script.async = true;
        document.body.appendChild(script);
    }
    render = () => {
        return (
            <main className="container">
                <Head />
                <LoadContractForm />
                <MetricForm
                    onFormSubmit={this.handleFormSubmit}
                    onUpdateTree={this.updateTree}
                />
                <Metrics metric={this.state.metric} />
                <Error errors={this.state.errors} />
                <div id={this.plotId}></div>
            </main>
        );
    };
}
