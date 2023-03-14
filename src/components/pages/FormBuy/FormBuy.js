import React, { useState } from "react";

// Firebase
import { db } from "../../../Firebase/Firebase";
import { collection, addDoc } from "firebase/firestore";

import MessageSuccess from "../../MessageSuccess/MessageSuccess";

import "./FormBuy.css";

import TextField from "@mui/material/TextField";

const styles = {
  containerShop: {
    textAlign: "center",
    paddingTop: 20,
  },
};

const initialState = {
  name: "",
  lastName: "",
  city: "",
};

const FormBuy = () => {
  const [values, setValues] = useState(initialState);
  const [purchaseID, setPurchaseID] = useState("");

  // console.log(purchaseID);

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
    <div style={styles.containerShop}>
      <h1>Finalizar Compra</h1>
      <form className="FormContainer" onSubmit={handleOnSubmit}>
        <TextField
          placeholder="Name"
          style={{ margin: 10, width: 400 }}
          name="name"
          value={values.name}
          onChange={handleOnChange}
        />
        <TextField
          placeholder="Last Name"
          style={{ margin: 10, width: 400 }}
          name="lastName"
          value={values.lastName}
          onChange={handleOnChange}
        />
        <TextField
          placeholder="email"
          style={{ margin: 10, width: 400 }}
          name="email"
          value={values.city}
          onChange={handleOnChange}
        />
        <button className="btnASendAction">Send</button>
      </form>
      {purchaseID ? <MessageSuccess purchaseID={purchaseID} /> : null}
    </div>
  );
};


export default FormBuy;