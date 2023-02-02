import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';

import { addToCart } from "../store/cartSlice";
import {  useGetAllProductsQuery } from "../http/ToysApi.js";
import ShowToy from '../pages/ShowToy.jsx';
export default function Slider(){
  

  return (
    <div>
    
  
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className='justify-content-center '
        itemId={1}
        src='https://cdn.toy.ru/upload/iblock/805/frame-5280-_5_.jpg'
        alt='first'
      >
      
      </MDBCarouselItem>

      <MDBCarouselItem

        className='justify-content-center'
        itemId={2}
        src='https://hamleys.ru/upload/rk/bc2/jr4un2v5rjtr86tr37mvhumnb7kaom8z.jpg'
        alt='two'
      >
      
      </MDBCarouselItem>

      <MDBCarouselItem
        className='justify-content-center'
        itemId={3}
        src='https://hamleys.ru/upload/rk/730/fpzvotmegb7iv96b7witxe71lrvinm07.jpg'
        alt='three'
      >
      <ShowToy />
        
      </MDBCarouselItem>
    </MDBCarousel>
    <ListGroup as="ul">
       
    <ListGroup.Item
    
    >
      Мягкие игрушки 
    </ListGroup.Item>
    <ListGroup.Item as="li">
      Warhammer 40,000
      </ListGroup.Item>
    <ListGroup.Item as="li">
      Конструкторы
    </ListGroup.Item>
    <ListGroup.Item as="li">Акции и новости</ListGroup.Item>
  </ListGroup> 
   
    </div>
  );
} 