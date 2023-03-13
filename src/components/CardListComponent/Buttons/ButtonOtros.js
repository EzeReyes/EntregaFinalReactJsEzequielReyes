import { ItemsContext } from "../../../itemContext";
import { useContext, useState, useEffect } from "react";


const ButtonOtros = () => {

  const { setItems, query, collection, db, getDocs, where } = useContext(ItemsContext);
    
const [gel, setGel] = useState([])

useEffect (() => {
  const getProducts = async () => {
      const q = query(collection (db, "products"), where("tipo", "==", "gel"));
      const querySnapshot = await getDocs (q);
      const docs = [];
      querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
      setGel(docs)
      })
  }
  getProducts();
},[collection, db, gel, getDocs, query, where]);

return (
    <button className="btn" onClick={() => setItems(gel) }>Gel</button>
)
}

export default ButtonOtros;