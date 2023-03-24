import React from "react";
import "./Clientes.css"


const Clientes = () => {

    return (
    <>
    <h2 className="containerTitle">Barberias y negocios que respaldan la calidad de nuestros productos:</h2>
    <div className="containerPpal">
    <div className="containerSecond">
    <img className="imgCliente" src="./imagesClientes/22.jpeg" alt=""/>
    <h3 className="titulo">Capitán Barba's</h3>
    <h4 className="lugar">Buenos Aires, Argentina</h4>
    <h5 className="parraf">Hace 6 meses abrí mi barbería y confíe en los productos del abuelo Mario!
        La verdad más que feliz por los resultados, los clientes felices al igual que yo.        
        Son los mejores 🔥👌</h5>
    </div>
    <div className="containerSecond">
    <img className="imgCliente" src="./imagesClientes/33.jpg" alt=""/>
    <h3 className="titulo">El Showroom del Barbero</h3>
    <h4 className="lugar">Buenos Aires, Argentina</h4>
    <h5 className="parraf">Encontra nuestros mejores productos en El Showroom del Barbero</h5>
    </div>
    <div className="containerSecond">
    <img className="imgCliente" src="./imagesClientes/44.jpg" alt=""/>
    <h3 className="titulo">Mariela Menna</h3>
    <h4 className="lugar">Buenos Aires, Argentina</h4>
    <h5 className="parraf">El Abuelo Mario es increíble, los productos y servicios son de primera calidad</h5>
    </div>
    </div>
    </>
    )
}


export default Clientes;