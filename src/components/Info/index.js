import React from "react";
import DarkVariantExample from "../Carousel/Carousel";

const Info = () => {
    return (
    <>
    <div className="containerInfo" id="containerInfo">
        <h2>Quienes Somos</h2>  
        <section>
            <p>"Somos de Mar del Plata, nos dedicamos a la elaboración de productos de estética y modulación para el cabello y la barba, principalmente productos para barberías.
      Productos totalmente artesanales, 100% naturales."</p>
        </section>
    </div>
    <div>
        <DarkVariantExample/>
    </div>
    </>
    );
};

export default Info;