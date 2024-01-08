import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Adopt.css";

const Adopt = () => {
  return (
    <div className="adopt-page">
      <header className="mt-5">
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <h1 className="text-light">Adopta un gatito</h1>
        </div>
      </header>

      <div className="container my-5">
        <h2 className="text-center mb-4">Formulario de Adopción</h2>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Nombre completo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu nombre"
              required
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresa tu correo"
              required
            />
          </Form.Group>

          <Form.Group controlId="telephone">
            <Form.Label>Número de teléfono</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Ingresa tu número de teléfono"
              required
            />
          </Form.Group>

          <Form.Group controlId="rason">
            <Form.Label>¿Por qué quieres adoptar un gatito?</Form.Label>
            <Form.Control as="textarea" rows={3} required />
          </Form.Group>
          <br />
          <Button variant="dark" type="submit">
            Enviar Solicitud de Adopción
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Adopt;