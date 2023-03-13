import { ItemsContext } from "../../../itemContext";
import { useContext, useState, useEffect } from "react";


const ButtonPomada = () => {

const { setItems, query, collection, db, getDocs, where } = useContext(ItemsContext);

const [pomada, setPomada] = useState([]);

useEffect (() => {
    const getProducts = async () => {
        const q = query(collection (db, "products"), where("tipo", "==", "pomada"));
        const querySnapshot = await getDocs (q);
        const docs = [];
        querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
        setPomada(docs)
        })
    }
    getProducts();
},[]);

return (<button className="btn" onClick={() => setItems(pomada) }>Pomadas</button>)}

export default ButtonPomada;