import React, { Component } from "react";
import { contract, addresses } from "../../fixtures";
import { HandleContract } from "../../services/handleContract";
export default class LoadContractForm extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: false };
    }

    componentDidMount = () => {
        this.addrEl = document.getElementById("address");
        this.invalidAddrEl = document.getElementById("invalid");
        this.contractCodeEl = document.getElementById("sc_code");
        document.getElementById("sc_code").value = contract;
    };

    onSubmit = () => {
        this.setState({ loading: true });
        new HandleContract(this).finally(() =>
            this.setState({ loading: false })
        );
    };

    render = () => (
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-6">
                        <input
                            className="form-control form-control-sm font-weight-light"
                            id="address"
                            data-list={addresses}
                            data-minchars="1"
                            placeholder="Write a contract's address (0x7de6783f26e024ef2db774a0fd02742b11891d3f)"
                        />
                    </div>
                    <div className="col-6">
                        <button
                            className="btn btn-sm btn-outline-info btn-block"
                            onClick={() => this.onSubmit()}
                            disabled={this.state.loading}
                        >
                            <span
                                className={`spinner-border spinner-border-sm ${this.state.loading ? "mr-2" : "d-none"
                                    }`}
                            ></span>
                            Upload a Smart Contract from an address
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col pl-10">
                        <div className="invalid-feedback" id="invalid">
                            Please choose a valid contract address such as:
                            0x114ef3df5820d55d32045afaa15d8cc7ba2156d7
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
