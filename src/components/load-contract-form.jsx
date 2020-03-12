import React, { Component } from "react";

export default class LoadContractForm extends Component {
    render() {
        return (
            <form>
                <div class="form-group row">
                    <label htmlFor="sc_address" class="col-sm-4 col-form-label">
                        Write the smart contract's address:
                    </label>
                    <div class="col-sm-6">
                        <input
                            class="form-control"
                            id="sc_address"
                            value="0x7de6783f26e024ef2db774a0fd02742b11891d3f"
                        />
                    </div>
                    <div className="col-sm-2">
                        <button
                            type="button"
                            className="btn btn-info mb-3"
                            onClick={() =>
                                this.props.onFormSubmit(
                                    document.getElementById("sc_address").value
                                )
                            }
                        >
                            Load
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}
