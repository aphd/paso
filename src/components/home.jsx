import React from "react";
import { Helmet } from "react-helmet";
import Form from "../components/form";

const Home = () => (
    <main className="container">
        <Helmet>
            <title>SOLPAR</title>
        </Helmet>
        <Form />
    </main>
);

export default Home;
