import React from "react";
import { Form } from "react-bootstrap";
import { addDoc, collection } from 'firebase/firestore';
import { db } from "./firebase";
import "./Booking.css";
import { ContactInfo } from "../components/ContactInfo";

export const Booking = () => {
  const bookingCollectionRef = collection(db, "reservations");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reservationData = {
      firstName: e.target.elements["first-name"].value,
      lastName: e.target.elements["last-name"].value,
      emailAddress: e.target.elements["email-address"].value,
      phoneNumber: e.target.elements["phone-number"].value,
      date: e.target.elements["date"].value,
      guestsNumber: e.target.elements["guests-number"].value,
      comments: e.target.elements["comments"].value,
    };

    try {
      // Guardar datos en la colección 'reservations'
      await addDoc(bookingCollectionRef, reservationData);
      alert("¡Reserva exitosa!");
    } catch (error) {
      console.error("Error al realizar la reserva:", error.message);
      alert("Ocurrió un error al realizar la reserva. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="contact-page">
      <header className="mt-5">
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <h1 className="text-light">Reserva con nosotros</h1>
        </div>
      </header>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <ContactInfo />
          </div>
          <div className="col-lg-6 bg-dark text-light py-5">
            <h2 className="text-center font-weight-bold mb-5 pt-0">
              Por favor, ingresa aquí tus datos:
            </h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="row mb-3">
                <div className="col-md-6">
                  <Form.Label htmlFor="first-name">Nombre</Form.Label>
                  <Form.Control type="text" id="first-name" />
                </div>
                <div className="col-md-6">
                  <Form.Label htmlFor="last-name">Apellido</Form.Label>
                  <Form.Control type="text" id="last-name" />
                </div>
              </Form.Group>
              <Form.Group className="row mb-3">
                <div className="col-md-6">
                  <Form.Label htmlFor="email-address">Correo</Form.Label>
                  <Form.Control type="email" id="email-address" />
                </div>
                <div className="col-md-6">
                  <Form.Label htmlFor="phone-number">Teléfono</Form.Label>
                  <Form.Control type="tel" id="phone-number" />
                </div>
              </Form.Group>
              <Form.Group className="row mb-3">
                <div className="col-md-6">
                  <Form.Label htmlFor="date">Fecha</Form.Label>
                  <Form.Control type="date" id="date" />
                </div>
                <div className="col-md-6">
                  <Form.Label htmlFor="guests-number">Comensales</Form.Label>
                  <Form.Control type="number" id="guests-number" />
                </div>
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label htmlFor="comments">Comentarios</Form.Label>
                <Form.Control type="textarea" id="comments" />
              </Form.Group>
              <button type="submit" className="btn btn-light btn-lg-">
                Reservar
              </button>
            </Form>
          </div>
        </div>
      </div>

      <div className="bg-dark text-light py-5"></div>
    </div>
  );
};

export default Booking;