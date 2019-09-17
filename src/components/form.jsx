import React, { Component } from "react";
import { parseSol } from "../utils/parse-sol";
import { code } from "../fixtures/simple.sol.jsx";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.value,
            code: code
        };
    }
    handleClick() {
        const sc_code = document.getElementById("sc_code").value;
        parseSol(sc_code);
    }
    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">
                        Insert the solidity code in this textarea
                    </label>
                    <textarea
                        className="form-control"
                        id="sc_code"
                        rows="10"
                        defaultValue={this.state.code}
                    ></textarea>
                </div>
                <button
                    type="button"
                    className="btn btn-primary mb-2"
                    onClick={e => this.handleClick()}
                >
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;
