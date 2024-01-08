import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Adopt from "./pages/Adopt";
import Booking from "./pages/Booking";

function App() {
  return (
    <div>
      <Navbar expand="lg" className="fixed-top bg-body-tertiary shadow">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="navbar-brand text-dark fw-semibold">
              La Dona Gatona
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse aria-controls="basic-navbar-nav">
            <Nav className="me-auto justify-content-end w-100">
              <Nav.Link href="/restaurant-app-dg/" className="active text-uppercase">
                Inicio
              </Nav.Link>
              <Nav.Link href="/restaurant-app-dg/menu" className="text-uppercase">
                Menu
              </Nav.Link>
              <Nav.Link href="/restaurant-app-dg/adopt" className="text-uppercase">
                Adopta
              </Nav.Link>
              <Nav.Link href="/restaurant-app-dg/booking" className="text-uppercase">
                Reserva
              </Nav.Link>
              <Nav.Link href="/restaurant-app-dg/about" className="text-uppercase">
                Nosotros
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/restaurant-app-dg/" element={<Home />} />
        <Route path="/restaurant-app-dg/menu" element={<Menu />} />
        <Route path="/restaurant-app-dg/adopt" element={<Adopt />} />
        <Route path="/restaurant-app-dg/about" element={<About />} />
        <Route path="/restaurant-app-dg/booking" element={<Booking />} />
      </Routes>

      <footer className="bg-body-tertiary">
        <p className="p-3 m-0 text-center">copyright @ made by Lautaro </p>
      </footer>
    </div>
  );
}

export default App;
