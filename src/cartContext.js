import { useState, createContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";

export const cartContext = createContext();

export const ItemsCartProvider = ({ children }) => {

const [cart, setCart] = useState([]);

const agregarProductosAlCarrito = ((p) => {  
  if (cart.find(elemento => elemento.id ===p.id)) {
      const products = cart.map(elemento => elemento.id ===p.id ?  {...elemento, cantidad: elemento.cantidad+ 1 } : elemento)
      return (setCart([...products]))
  }
  setCart([...cart,p]);
  })

const Toast = () => {
  toast.success('Producto Agregado al Carrito', {
      position: "top-right",
      autoClose: 650,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
      theme: "dark",
      });
}

//ESTA FUNCIÓN RESTA LA CANTIDAD DE PRODUCTOS DEL CARRO
  const restar = ((p) => {  
      if (cart.find(elemento => elemento.id ===p.id)) {
          const products = cart.map(elemento => elemento.id ===p.id && elemento.cantidad>1 ?  {
            ...elemento, cantidad: elemento.cantidad - 1 } : elemento)
          return (setCart([...products]))
      }
      setCart([...cart,p])
      })
    
// ESTA FUNCION BORRA TODOS LOS PRODUCTOS DEL CARRITO
const clear = () => setCart([]);

// ESTA FUNCION BORRA EL ELEMENTO SELECCIONADO DEL CARRITO
const removeItem = (id) => setCart(cart.filter(product => product.id !== id));

//ESTA FUNCIÓN SUMA LA CANTIDAD DE PRODUCTOS PARA EL COUNTERCART
const counterCart = cart.reduce((prev, next) => prev + next.cantidad, 0);

// ESTA FUNCIÓN CALCULA EL PRECIO TOTAL
const precioPorCantidad = cart.map(item => ({precio: item.precio * item.cantidad}));   
const total = precioPorCantidad.reduce((prev, next) => prev + next.precio, 0);

// ESTA FUNCIÓN HABILITA EL FORMULARIO PARA FINALIZAR COMPRA
const finalizarCompra = () =>  cart.length===0 ? <p>SU CARRO SE ENCUENTRA VACÍO</p> : <Link to="/FinishBuy">FINALICE SU COMPRA</Link> 

return (
    <cartContext.Provider value={{  cart, setCart, finalizarCompra, agregarProductosAlCarrito, Toast, restar, counterCart, total, clear, removeItem}}>
    {children}
    <ToastContainer />         
    </cartContext.Provider>
);
};
