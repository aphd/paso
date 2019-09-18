import React, { Component } from "react";
import { json2html } from "../utils/json2html";

class Metrics extends Component {
    render = () => {
        try {
            return (
                <table className="table table-hover">
                    <tbody>{json2html(this.props.metric)}</tbody>
                </table>
            );
        } catch {
            return <React.Fragment></React.Fragment>;
        }
    };
}

export default Metrics;
