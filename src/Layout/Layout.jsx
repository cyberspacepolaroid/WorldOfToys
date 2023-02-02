import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Routers from "../Routes/Routers";
import Footer from "../components/Footer";

import { Container, Row, Col } from "reactstrap";
import Carts from "../pages/Cart";
import { useSelector } from "react-redux";
import { useState } from "react";
import Toys from "../components/Toys";
import ToyMenu from "../pages/ToyMenu";
import ShowToy from "../pages/ShowToy";
const Layout = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Routers />
      <div>
      
       
       
        
       
        </div>
      </div>
  
  );
};
export default Layout;
