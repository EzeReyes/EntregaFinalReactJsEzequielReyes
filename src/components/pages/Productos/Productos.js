import React, { useState, useEffect } from "react";
import Spinner from "../../Spinner/Spinner";
import "./Productos.css"

// FIRBASE - FIRESTORE
import { db } from "../../../Firebase/Firebase";
import { collection, query, getDocs, where } from "firebase/firestore";

// REACT ROUTER DOM
import { useParams, Link } from "react-router-dom";
import CardComponent from "../../CardListComponent/CardComponent/CardComponent";

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { tipo } = useParams();


  useEffect(() => {
    setIsLoading(true);
    const getProducts = async () => {
      const q = query(collection(db, "products"), where("tipo", "==", tipo));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      console.log(docs);
      setProductos(docs);
    };
    getProducts();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [tipo]);

  return (
    <div
      style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around", width: "100vw", margin: "2rem 0"}}
    >
      {isLoading ? (
        <div className="Spinner">
          <Spinner />
        </div>
      ) : (
        productos.map((data) => {
          return (
          <> 
          <div>
          <CardComponent data={data} key={data.id} />
          <Link className="irADetalle" to={`/detail/${data.id}`}>Ir al detalle del Producto</Link>
          </div>
          </>
          );
        })
      )}
    </div>
  );
};

export default Productos;
