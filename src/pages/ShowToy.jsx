import React, {useState}from "react";
import product from "../Data/Products.jsx";
import { Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

import '../styles/home.css';

  const ShowToy=()=>{
 
    const [search, setSearch]=useState('')
    
    

    
      return(
      <>
      <Row>
          <form class="d-flex align-items-center gap-4" role="search">
            <input
              onChange={(event) => setSearch(event.target.value)}
              class="form-control me-2"
              type="search"
              placeholder="Поиск"
              aria-label="Search"
            />
  
            <button
              class="btn btn-outline-success"
              type="submit"
              onChange={(event) => setSearch(event.target.value)}
            >
              Искать
            </button>
          </form>
        </Row>
      
           <div className="temtcon">
            {
             product 
              .filter((val) => {
                if(search === ""){
                  return val;
                }else if(val.title.toLowerCase().includes(search.toLowerCase())){
                  return val;
                }
              })
              .map((val) => {
                return(
                  <div className="containsearch" key={val.id}>
                      <img src={val.image} alt="" width="90" />
                      <h3>{val.title}</h3>
                      <p className="price">{val.price} руб.</p>
                  </div>
                )
              })
          }
          
        </div>
        
      
    </>
  )
}

       
    
  
export default ShowToy;