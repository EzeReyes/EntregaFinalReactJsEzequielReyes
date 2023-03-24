import React from "react";
import "./Info.css"

const Info = () => {
    return (
    <>
    <div className="containerInfo" id="containerInfo">
        <div className="aboutTitle">
        <h2 className="quienes">¿Quienes Somos?</h2>  
        </div>
        <section>
            <p className="parrafo">"Somos de Mar del Plata, nos dedicamos a la elaboración de productos de estética y modulación para el cabello y la barba, principalmente productos para barberías.
      Productos totalmente artesanales, 100% naturales."</p>
        </section>
    </div>
    <div className="secondTitle">
    <p className="parrafSeconTitle">Participamos de eventos locales y también en la provincia de Buenos Aires, donde nos relacionamos con barberos, productores, estilistas y todo lo relacionado al rubro</p>
    </div>
    <div className="gridAbout">
        <img className="imgSize" src="./imagesAbout/1.jpeg" alt=""/>
        <img className="imgSize" src="./imagesAbout/2.jpeg" alt=""/>
        <img className="imgSize" src="./imagesAbout/3.jpeg" alt=""/>
        <img className="imgSize" src="./imagesAbout/4.jpeg" alt=""/>
        <img className="imgSize" src="./imagesAbout/A.jfif" alt=""/>
        <img className="imgSize" src="./imagesAbout/C.jfif" alt=""/>
        <img className="imgSize" src="./imagesAbout/D.jfif" alt=""/>
    </div>
    </>
    );
};

export default Info;