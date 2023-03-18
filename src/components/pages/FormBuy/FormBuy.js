import React, { useState, useContext } from "react";
import { cartContext } from "../../../cartContext";

// Firebase
import { db } from "../../../Firebase/Firebase";
import { collection, addDoc } from "firebase/firestore";

import MessageSuccess from "../../MessageSuccess/MessageSuccess";

import "./FormBuy.css";

import TextField from "@mui/material/TextField";
const initialState = {
  name: "",
  lastName: "",
  email: "",
};

const FormBuy = () => {
  const [values, setValues] = useState(initialState);
  const [purchaseID, setPurchaseID] = useState("");

  let {clear} = useContext(cartContext)

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "purchases"), {
      values,
    });
    // console.log("Document written with ID: ", docRef.id);
    setPurchaseID(docRef.id);
    setValues(initialState);
  };

  return (
    <div className="ContainerPrincipal">
      <h1>Finalizar Compra</h1>
      <form className="FormContainer" onSubmit={handleOnSubmit}>
        <TextField className="TextField"
          placeholder="Ingrese su nombre"
          style={{ margin: 10, width: 400, color:"white" }}
          name="name"
          value={values.name}
          onChange={handleOnChange}
        />
        <TextField className="TextField"
          placeholder="Ingrese su apellido"
          style={{ margin: 10, width: 400, color: 'success.main' }}
          name="lastName"
          value={values.lastName}
          onChange={handleOnChange}
        />
        <TextField className="TextField"
          placeholder="Ingrese su email"
          style={{ margin: 10, width: 400, color:"white" }}
          name="email"
          value={values.email}
          onChange={handleOnChange}
        />
        <button className="btnASendAction" onClick={()=> clear()}>Send</button>
      </form>
      {purchaseID ?<MessageSuccess purchaseID={purchaseID}/> : null}
    </div>
  );
};


export default FormBuy;