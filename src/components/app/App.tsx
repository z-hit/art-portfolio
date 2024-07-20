import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Page404 from "../page404/Page404";
import Contact from "../contact/Contact";
import Home from "../home/Home";
import Gallery from "../gallery/Gallery";
import About from "../about/About";
import Layout from "../layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}

export default App;
