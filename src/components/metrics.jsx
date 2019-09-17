import React, { Component } from "react";
import { json2html } from "../utils/json2html";

class Metrics extends Component {
    render = () => {
        try {
            const { Version, LOC, types } = this.props.metric;
            return (
                <React.Fragment>
                    <div className="alert alert-primary" role="alert"></div>
                    <table className="table table-hover">
                        <tbody>
                            <tr>
                                <th>Version</th>
                                <td>{Version || "Undefined"}</td>
                            </tr>
                            <tr>
                                <th>Loc</th>
                                <td>{LOC}</td>
                            </tr>
                            {json2html(types)}
                        </tbody>
                    </table>
                </React.Fragment>
            );
        } catch {
            return <React.Fragment></React.Fragment>;
        }
    };
}

export default Metrics;
