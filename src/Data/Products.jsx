import bear from '../images/bear.jpg';
import wm from '../images/wm.jpg';
import { Col } from 'react-bootstrap';
import white from '../images/white.jpg';
import khaos from '../images/khaos.jpg';
import adeptasor from '../images/adeptasor.jpg';
import blue from '../images/blue.jpg';
import lol from '../images/lol.jpg';
const products= [
    {
        id: "1", 
        title: "Мишка плюшевый", 
        price: 2499,
        category: "Девочкам",
      
        image: white,
        
    }, 
    {
        id: "3", 
        title: "Warhammer4000", 
        price: 15990,
        category: "Мальчикам",
       
        image: wm,
        
    }, 
    {
        id: "5", 
        title: "Мишка серый", 
        price: 2399,
        category: "Девочкам",

        image: bear,
        
    }, 
    {
        id: "6", 
        title: "Start Collecting! Chaos Space Marines",
        price: 7328,
        category: "Мальчикам",
      
        image: khaos,
    },
    {
        id: "9", 
        title: "Adeptus Mechanicus: Omnissiah's Talon",
        price: 18990,
        category: "Мальчикам", 
        image: adeptasor,
    },
    {
        id: "10", 
        title: "Poopsie Surprise 561347 Кукла (голубая/фиолетовая)",
        price: 8999,
        category: "Девочкам", 
        image: blue,
    },

    {
        id: "11", 
        title: "L.O.L. Surprise 576396 Кукла Present Surprise Tots Asst в PDQ",
        price: 2499,
        category: "Девочкам", 
        image: lol,
    },
    



]



export default products;