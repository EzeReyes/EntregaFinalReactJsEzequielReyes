import {useContext} from "react";
import "./cart.css";
import { cartContext } from "../../../cartContext";
import image from "./eliminar.png";

const Cart = () => {

let { cart, agregarProductosAlCarrito, restar, total, removeItem, clear, finalizarCompra } = useContext(cartContext);

    return (
        <>
    <h2>Productos seleccionados:</h2>
    <div className="containerFl">
    <p className="titulos">Producto</p>
    <p className="titulos">Precio por unidad</p>
    <p className="titulos">Cantidad</p>
    </div>
    <div className="containerProds">{
    cart.map ((producto) => { 
    return (
    <div className="containerFlex" key={producto.id}>
            <div className="producto">
            <h5 className="productList">{producto.nombre}</h5>
            <img className="img" src={producto.img} alt={producto.nombre}/>
            </div>
            <div className="precioXUnidad">
            <p className="productList">{producto.precio}</p>
            </div>
            <div className="container">
            <button className="sumarRestar" onClick={ () => `${agregarProductosAlCarrito(producto)}`}>+</button>
            <p className="cantidad">{producto.cantidad}</p>
            <button className="sumarRestar" onClick={ () => `${restar(producto)}`}>-</button>            
            </div>
            <img className="imgDelete" src={image} alt="" onClick={() => `${removeItem(producto.id)}`}/>
    </div>)})    }
    </div>
    <div className="containerFinal">
        <p>TOTAL: {total}</p>
        <button onClick={clear} >BORRAR TODO</button>
        {finalizarCompra()}
        <div>
        </div>
    </div>
    </>
    )
}

export default Cart;