import React, { Component } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default class Head extends Component {
    render = () => {
        return (
            <HelmetProvider>
                <Helmet>
                    <title>PASO</title>
                </Helmet>
            </HelmetProvider>
        );
    };
}
