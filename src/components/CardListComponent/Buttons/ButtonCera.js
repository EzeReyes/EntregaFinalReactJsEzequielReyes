import { ItemsContext } from "../../../itemContext";
import { useContext, useState, useEffect } from "react";


const ButtonCera = () => {

const { setItems, query, collection, db, getDocs, where } = useContext(ItemsContext);
    
const [cera, setCera] = useState([]);

useEffect (() => {
    const getProducts = async () => {
        const q = query(collection (db, "products"), where("tipo", "==", "cera",));
        const querySnapshot = await getDocs (q);
        const docs = [];
        querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
        setCera(docs)
        })
    }
    getProducts();
  },[collection, db, getDocs, query, where]);

return (
    <button className="btn" onClick={() => setItems(cera) }>Ceras</button>
)
}

export default ButtonCera;