import CardComponent from "./CardComponent/CardComponent";
import "./CardListComponent.css";
import { Link } from "react-router-dom";
import { ItemsContext } from "../../itemContext";
import { useContext } from "react";
import Spinner from "../Spinner/Spinner";

const CardListComponent = () => {

const { items, isLoading} = useContext(ItemsContext)


const mapear = (card) => { return ( 
    isLoading ? ( <div className="Spinner">
        <Spinner/>
        </div>
        ) : 
card.map ((user) => { 
    return (
    <div key={user.id}>
    <Link to={`/detail/${user.id}`}>
    <CardComponent data={user}/>
    </Link>
    </div>)}
    ))
    }


return (
    <>
    <div className="containerProducts">
    {mapear(items)}
    </div>
    </>
    );
}  




export default CardListComponent;

