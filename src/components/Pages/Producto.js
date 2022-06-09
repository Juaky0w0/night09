import React from "react";
import CarouselContainer from '../CarouselContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Producto.css';
import { SliderProd } from "../Sliderprod";
/*import image1 from '../../img/prod3.png';*/




export const Producto = () => {
  return (
    <>
    <div className="container-carrusel">
    <CarouselContainer />
    </div>

   <div className="products">
    <h2>Productos Destacados</h2>
  </div>

  <SliderProd  />

  {/*<div className="container-img">
       <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        </div>*/}
</>
  );
};

