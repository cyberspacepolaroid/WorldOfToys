import React from "react";

import Toys from "../components/Toys.jsx";
import Slider from "../components/Slider.jsx";
import "../styles/home.css";
import ToyMenu from "./ToyMenu.jsx";
import ShowToy from "./ShowToy.jsx";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addToCart } from "../store/cartSlice";
import { productsApi, useGetAllProductsQuery } from "../http/ToysApi.js";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <div className="mh">
      <Slider />
    
       
        <div className="mh-5">
        <ShowToy />
        </div>
       
        <Toys />
      </div>
    
   
  );
};

export default Home;
