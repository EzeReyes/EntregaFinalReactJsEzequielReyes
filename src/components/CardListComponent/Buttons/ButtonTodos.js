import { ItemsContext } from "../../../itemContext";
import { useContext, useState, useEffect } from "react";

const ButtonTodos = () => {

const { setItems, query, collection, db, getDocs } = useContext(ItemsContext);
    
const [todos, setTodos] = useState();

useEffect (() => {
    const getProducts = async () => {
    const q = query(collection (db, "products"));
        const querySnapshot = await getDocs (q);
        const docs = [];
        querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
        setTodos(docs)
        })
    }
    getProducts();
});

return (<button className="btn" onClick={() => setItems(todos) }>Todos</button>)}

export default ButtonTodos;