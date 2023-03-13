import { useState, createContext, useEffect } from "react";


// FIREBASE
import { db } from "./Firebase/Firebase";
import { collection, query, getDocs, where } from "firebase/firestore";

// 1 - CREAMOS EL CONTEXTO
// 2 - CREAR EL COMPONENTE PROVIDER
// 3 - RETONAR NUESTRO CONTEXT CON UN .PROVIDER
/* 4 - PROPS.CHILDREN O BIEN CHILDREN */

export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {

useEffect (() => {
  const getProducts = async () => {
    const q = query(collection (db, "products"));
    const querySnapshot = await getDocs (q);
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
      setItems(docs)
    })
  }
  getProducts();
},[]);



// eslint-disable-next-line

  const [items, setItems] = useState([]);

  // const [cart, setCart] = useState([]);

  // const productInCart = (id) => cart.find(product => product.id === id) ? true : false;
  
  const foo = () => {
    alert(`Cantidad de items en nuestro carrito: ${items.length}`);
  };

  return (
    <ItemsContext.Provider value={{query, collection, getDocs, db, where, items, setItems, foo}}>
      {children}
    </ItemsContext.Provider>
  );
};
