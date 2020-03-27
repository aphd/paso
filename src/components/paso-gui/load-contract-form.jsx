import React, { Component } from "react";
import { code } from "../../fixtures/simple.sol.jsx";
import { getContractFromAddress } from "../../utils/getContract";

export default class LoadContractForm extends Component {
    componentDidMount() {
        document.getElementById("sc_code").value = code;
    }
    checkAddress(addr) {
        document.getElementById("invalid").classList.remove("d-block");
        !!addr.match(/^0x[a-zA-Z0-9]{40}$/) ||
            document.getElementById("invalid").classList.add("d-block");
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
            <div className="card ">
                <div className="card-body">
                    <div className="row">
                        <div className="col-6">
                            <input
                                className="form-control form-control-sm font-weight-light"
                                id="sc_address"
                                placeholder="Write a contract's address (0x7de6783f26e024ef2db774a0fd02742b11891d3f)"
                            />
                        </div>
                        <div className="col-6">
                            <button
                                type="button"
                                className="btn btn-sm btn-secondary btn-block"
                                onClick={() => {
                                    const addr = document.getElementById(
                                        "sc_address"
                                    ).value;
                                    this.checkAddress(addr);
                                    this.handleLoadSCFormSubmit(addr);
                                }}
                            >
                                Upload a Smart Contract from an address
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col pl-10">
                            <div className="invalid-feedback" id="invalid">
                                Please choose a valid contract address such as:
                                0x7de6783f26e024ef2db774a0fd02742b11891d3f
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
