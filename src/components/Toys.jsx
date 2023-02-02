import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Col} from "reactstrap";
import { motion } from "framer-motion";
import "remixicon/fonts/remixicon.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addToCart } from "../store/cartSlice";
import { productsApi, useGetAllProductsQuery } from "../http/ToysApi.js";
import '../styles/home.css';
const Toys = () => {
  
  const {data} =useGetAllProductsQuery();
  const dispatch=useDispatch();
  const history=useNavigate();
  
  const handleAddToCart=(product)=>{
    dispatch(addToCart(product));
    history.push("/cart");
  }
  const [menu, setMenu] = useState(data);
  const filteredProduct = (cartItem) => {
    const filtered = data.filter((productData) => {
      return productData.category === cartItem;
    });
    setMenu(filtered);
  };

  return (
    <div className="menudata gap-4">
      
      <button
        className="btn btn-primary mb-4 btn-lg"
        onClick={() => filteredProduct("Мальчикам")}
      >
        
        Мальчикам{" "}
      </button>{" "}
      <button
        className="btn btn-danger mb-4 btn-lg"
        onClick={() => filteredProduct("Девочкам")}
      >
        Девочкам
      </button>{" "}
      <button className="btn btn-info mb-4 btn-lg">Акции</button>{" "}
      <button
        className="btn btn-warning mb-4 btn-lg"
        onClick={() => setMenu(data)}
      >
        Новинки
      </button>{" "}
      {"  "}
     
      <div className="row5">
      {menu?.map(data => <div key={data.id} className="product">
      <Card><h3>{productsApi.title}</h3>
    <img src={data.image} width="250" />
    <p>{data.price} руб.</p>
    <a href="/" class="btn btn-primary" onClick={()=> handleAddToCart(data)}> 
       Купить
        </a></Card>
  </div>)}
  
  </div>
  


</div>


  )}
            
          
       

export default Toys;
