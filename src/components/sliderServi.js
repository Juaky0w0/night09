import React from "react";
import ReactDOM from "react-dom";

/* Mandatory Imports */
import Slider from "./scripts/Slide";
import Slide from "./scripts/Slide";

export function SliderServi(){  
  const wrapper = (
  /* Slider Begins */
   <Slider>
    <Slide cover="../img/uno.jpg">{/* Add your desired content inside */}</Slide>
    <Slide cover="../img/dos.jpg"></Slide>
    <Slide cover="../img/tres.jpg"></Slide>
    <Slide cover="../img/cuatro.jpg"></Slide>    
   </Slider>
   /* Slider Ends */
    );      
ReactDOM.render(wrapper, document.getElementById("root"));
}