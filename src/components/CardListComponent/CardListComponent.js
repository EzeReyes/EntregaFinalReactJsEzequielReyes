import CardComponent from "./CardComponent/CardComponent";
import "./styles.css";
import { Link } from "react-router-dom";
import { ItemsContext } from "../../itemContext";
import { useContext } from "react";
// import ButtonCera from "./Buttons/ButtonCera";
// import ButtonGel from "./Buttons/ButtonOtros";
// import ButtonTodos from "./Buttons/ButtonTodos";
// import ButtonPomada from "./Buttons/ButtonPomada";


const CardListComponent = () => {

const { items} = useContext(ItemsContext)


const mapear = (card) => { return (
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
    <h1>Abuelo Mario, productos de barbería</h1>
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

