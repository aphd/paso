import React, { Component } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default class Head extends Component {
    render = () => {
        return (
            <HelmetProvider>
                <Helmet>
                    <script src="./index.iife.js" type="text/javascript" />
                    <title>PASO: SOlidity-</title>
                </Helmet>
                <h4 className="text-center font-weight-lighter font-italic pt-2">
                    PASO (PArse SOlidity smart contract code)
                </h4>
            </HelmetProvider>
        );
    };
}
