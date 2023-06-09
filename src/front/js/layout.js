import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";


import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Planetsingle } from "./pages/planetSingle.js";
import { DetailPeople } from "./component/detailPeople.jsx";
import { DetailVehicle } from "./component/detailVehicle.jsx";
import { DetailPlanet } from "./component/detailPlanet.jsx";


//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>

                    <Route element={<Home />} path="/" />
                       
                        <Route element={<DetailPeople />} path="/people/:uid"/>
                        <Route element={<DetailVehicle />} path="/starships/:uid"/>
                        <Route element={<DetailPlanet />} path="/planets/:uid" />
                        
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
