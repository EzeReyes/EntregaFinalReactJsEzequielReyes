import { ItemsContext } from "../../../itemContext";
import { useContext, useState, useEffect } from "react";


const ButtonCera = () => {

const { setItems, query, collection, db, getDocs, where } = useContext(ItemsContext);
    
const [cera, setCera] = useState([]);
// useEffect(() => {
//     fetch(`https://63c761b4dcdc478e15d3f6f8.mockapi.io/producto?tipo=cera`)
//     .then(response => response.json())
//     .then(json => setCera(json))
// },[]);

useEffect (() => {
    const getProducts = async () => {
        const q = query(collection (db, "products"), where("tipo", "==", "cera",));
        const querySnapshot = await getDocs (q);
        const docs = [];
        querySnapshot.forEach((doc) => {
        // console.log(doc.id, "=>" , doc.data ());
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