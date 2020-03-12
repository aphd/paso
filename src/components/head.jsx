import React, { Component } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default class Head extends Component {
    render = () => {
        return (
            <HelmetProvider>
                <Helmet>
                    <title>PASO</title>
                </Helmet>
                <h4 className="text-center font-weight-lighter font-italic">
                    PASO (PArse SOlidity smart contract code)
                </h4>
            </HelmetProvider>
        );
    };
}
