import React, { Component } from "react";

export default class MetricForm extends Component {
    render() {
        return (
            <div className="card mt-2">
                <div className="card-body">
                    <div className="form-group">
                        <textarea
                            className="form-control font-weight-light form-control-sm"
                            id="sc_code"
                            rows="10"
                        ></textarea>
                    </div>
                    <button
                        type="button"
                        className="btn btn-outline-warning btn-block"
                        onClick={() =>
                            this.props.onFormSubmit(
                                document.getElementById("sc_code").value
                            )
                        }
                    >
                        Compute the Solidity Metrics
                    </button>
                </div>
            </div>
        );
    }
}
