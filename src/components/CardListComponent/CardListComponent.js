import CardComponent from "./CardComponent/CardComponent";
import "./CardListComponent.css";
import { Link } from "react-router-dom";
import { ItemsContext } from "../../itemContext";
import { useContext } from "react";
import Spinner from "../Spinner/Spinner";
// import ButtonCera from "./Buttons/ButtonCera";
// import ButtonGel from "./Buttons/ButtonOtros";
// import ButtonTodos from "./Buttons/ButtonTodos";
// import ButtonPomada from "./Buttons/ButtonPomada";


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
    <div className="btnContainer">
    {/* <ButtonTodos/>
        <ButtonCera/>
    <ButtonPomada/>
    <ButtonGel/> */}
    </div>
    <div className="containerProducts">
    {mapear(items)}
    </div>
    </>
    );
}  




export default CardListComponent;

