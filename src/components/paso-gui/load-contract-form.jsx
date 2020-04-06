import React, { Component } from "react";
import { code } from "../../fixtures/simple.sol.jsx";
import { HandleContract } from "../../services/handleContract";

export default class LoadContractForm extends Component {
    componentDidMount() {
        this.addrEl = document.getElementById("address");
        this.invalidAddrEl = document.getElementById("invalid");
        this.contractCodeEl = document.getElementById("sc_code");
        document.getElementById("sc_code").value = code;
    }

    render() {
        return (
            <div className="card ">
                <div className="card-body">
                    <div className="row">
                        <div className="col-6">
                            <input
                                className="form-control form-control-sm font-weight-light"
                                id="address"
                                placeholder="Write a contract's address (0x7de6783f26e024ef2db774a0fd02742b11891d3f)"
                            />
                        </div>
                        <div className="col-6">
                            <button
                                className="btn btn-sm btn-secondary btn-block"
                                onClick={() => new HandleContract(this)}
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
