import React, { Component } from "react";
import { json2html } from "../../utils/json2html";

class Error extends Component {
    render = () => {
        try {
            return (
                <table className="table table-hover">
                    <tbody>{json2html(this.props.errors[0])}</tbody>
                </table>
            );
        } catch (e) {
            return <React.Fragment></React.Fragment>;
        }
    };
}

export default Error;
