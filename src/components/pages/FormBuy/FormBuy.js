import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const FormBuy = () => {

return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre: </Form.Label>
        <Form.Control type="name" placeholder="Ingrese su nombre" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Apellido: </Form.Label>
        <Form.Control type="subname" placeholder="Ingrese su Apellido" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
}



export default FormBuy;