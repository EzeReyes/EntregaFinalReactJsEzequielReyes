import { useEffect, useState, useContext } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from "react-router-dom";
import "./CardDetail.css";
import { CardContent } from "@mui/material";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { cartContext } from "../../../cartContext";
import Spinner from "../../Spinner/Spinner";

import { db } from "../../../Firebase/Firebase";
import {
    collection,
    query,
    getDocs,
    where,
    documentId,
} from "firebase/firestore";
import { ItemsContext } from "../../../itemContext";

const CardDetail = () => 
{
const [user, setUser] = useState ([]);
const {isLoading, setIsLoading} = useContext(ItemsContext)
const { agregarProductosAlCarrito, Toast} = useContext(cartContext);
let { id } = useParams();

        useEffect (() => {
            setIsLoading(true);
            const getProducts = async () => {
                const q = query(collection (db, "products"), where(documentId(), "==", id));
                const querySnapshot = await getDocs (q);
                const docs = [];
                querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
                setUser(docs) 
                })
            }
            getProducts();
            setTimeout(() => {
                setIsLoading(false);
            }, 1200);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[id]);

        // FUNCION QUE SE UTILIZA PARA RENDERIZAR LA CANTIDAD DE PRODUCTOS A RESTAR ANTES DE EFECTUAR LA COMPRA

    return (user.map((data) => { return ( 
        isLoading ? ( <div key={data.id} className="Spinner">
        <Spinner/>
        </div>
        ) : 
        <div key={data.id}>
        <h1 className="cardDetailTitulo">Detalle del producto seleccionado:</h1>
    <div className="Container">
        <div>
        <Card className="cardProducts" sx={{ maxWidth: 400 }}>
    <CardActionArea>
        <CardMedia className='cardMedia'
        component="img"
        height="200"
        image={data.img}
        alt={data.id}
        />
        <CardContent className='cardContent'>
            <Typography gutterBottom variant="h4" component="div">
            {data.nombre}
            </Typography>
            <Typography variant="h5">
            {data.tipo}
            </Typography>
        </CardContent>
    </CardActionArea>
    </Card>
    <div className="flexContainer"> 
    <div className="buttonContainer">
        <button className="buttonComprar" onClick={ () => `${agregarProductosAlCarrito(data)} ${Toast()}`}>AGREGAR AL CARRITO</button>
    </div>
</div>
        </div>
        <div className="InfoProduct">
            <h3>{`${data.tipo} ${data.nombre}`.toUpperCase()}</h3>
            <h4>Descripción del producto:</h4>
            <p>{data.descripcion}</p>
            <p className="Price" >$ {data.precio}</p>
        </div>
    </div>
    </div>)
}))}    


export default CardDetail;
