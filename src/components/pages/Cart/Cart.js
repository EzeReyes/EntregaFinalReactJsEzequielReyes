import {useContext} from "react";
import "./style.css";
import { cartContext } from "../../../cartContext";
import image from "./eliminar.png";
import FormBuy from "../FormBuy/FormBuy";


const Cart = () => {

let { cart, agregarProductosAlCarrito, restar, total, removeItem, clear } = useContext(cartContext);


    return (
        <>
    <h2>Productos seleccionados:</h2>
    <div className="containerFlex1">
    <p className="titulos">Producto</p>
    <p className="titulos">Precio por unidad</p>
    <p className="titulos">Cantidad</p>
    </div>
    <div className="containerProds">{
    cart.map ((producto) => { 
    return (
    <div className="containerFlex" key={producto.id}>
            <h5 className="productList">{producto.nombre}</h5>
            <img className="img" src={producto.img} alt={producto.nombre}/>
            <p className="productList">{producto.precio}</p>
            <div className="container">
            <button className="buttonComprar" onClick={ () => `${agregarProductosAlCarrito(producto)}`}>+</button>
            <p className="cantidad">{producto.cantidad}</p>
            <button className="buttonComprar" onClick={ () => `${restar(producto)}`}>-</button>            
            </div>
            <img className="imgDelete" src={image} alt="" onClick={() => `${removeItem(producto.id)}`}/>
    </div>)})    }
    </div>
    <div className="containerFinal">
        <p>TOTAL: {total}</p>
        <button onClick={clear}>BORRAR TODO</button>
    </div>
    <div className="formulario">
    <FormBuy/>
    </div>
    </>
    )
}

export default Cart;