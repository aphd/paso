import React, { Component } from "react";
import { json2html } from "../utils/json2html";

class Metrics extends Component {
    render = () => {
        try {
            return (
                <table className="table table-hover table-sm table-bordered">
                    <tbody>{json2html(this.props.metric)}</tbody>
                </table>
            );
        } catch (error) {
            return <React.Fragment></React.Fragment>;
        }
    };
}

export default Metrics;
