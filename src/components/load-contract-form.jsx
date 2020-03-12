import React, { Component } from "react";
import { code } from "../fixtures/simple.sol.jsx";
import { getContractFromAddress } from "../utils/getContract";

export default class LoadContractForm extends Component {
    componentDidMount() {
        document.getElementById("sc_code").value = code;
    }
    checkAddress(addr) {
        return !!addr.match(/^0x[a-zA-Z0-9]{40}$/);
    }
    handleLoadSCFormSubmit = address => {
        getContractFromAddress(address).then(data => {
            try {
                document.getElementById("sc_code").value = data;
            } catch (error) {
                console.log("error:", error);
            }
        });
    };
    render() {
        return (
            <div className="card">
                <div class="card-body">
                    <div className="row">
                        <div className="col-4">
                            <label
                                htmlFor="sc_address"
                                className="col-form-label"
                            >
                                Write the smart contract's address:
                            </label>
                        </div>
                        <div className="col-6">
                            <input
                                className="form-control"
                                id="sc_address"
                                defaultValue="0x7de6783f26e024ef2db774a0fd02742b11891d3f"
                            />
                        </div>
                        <div className="col-2">
                            <button
                                type="button"
                                className="btn btn-info mb-3"
                                onClick={() => {
                                    const addr = document.getElementById(
                                        "sc_address"
                                    ).value;
                                    console.log(this.checkAddress(addr));
                                    this.handleLoadSCFormSubmit(addr);
                                }}
                            >
                                Load
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
