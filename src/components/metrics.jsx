import React, { Component } from "react";

class Metrics extends Component {
    render() {
        return (
            <div className="alert alert-primary" role="alert">
                Loc: {JSON.stringify(this.props.metric)}
            </div>
        );
    }
}

export default Metrics;
