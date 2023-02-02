import React from "react";
import { BrowserRouter,
    Routes,
    Route,
    Navigate, Outlet
  } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Cart from '../pages/Cart';
import Login from '../pages/Login';
import Registr from "../pages/Registr";
import ToyMenu from "../pages/ToyMenu";
import Toys from "../components/Toys";
import ShowToy from "../pages/ShowToy";







  const Routers = () => {
    
    
    return <Routes>
       <Route path="/" exact element={<Navigate to='/home' />} />
       <Route path='/home' element={<Home />} />
        
          <Route path='/registrr' element={<Registr />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/registr" element={<Registr />} />
    
        <Route path="/toys/:id" element={<ToyMenu />} />
        <Route path="/toys" element={<ToyMenu />} />
        <Route path="/showtoy" element={<ShowToy />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
    

        </Routes>
        
  
};
export default Routers;