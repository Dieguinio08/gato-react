import React from "react";
import Layout from "@containers/Layout";
import Home from "@templates/Home";
import Medicamentos from "@templates/Medicamentos";
import Aboutme from "@templates/Aboutme";
import NotFound from "@templates/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
        <Layout>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/medicamentos" exact element={<Medicamentos />} />
                <Route path="/aboutme" exact element={<Aboutme />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Layout>
        </BrowserRouter>
    );
};
export default App;
