import React from "react";
import { MenuBtn } from "../components/MenuBtn";
import "./Home.css";
import AboutImg from "../utils/img/donasPreparacion.jpg";
import { Link } from "react-router-dom";
import { ContactInfo } from "../components/ContactInfo";
import ContactImage from "../utils/img/contactImage.png";

export const Home = () => {
  return (
    <div className="home-page">
      <header className="h-100 min-vh-100 d-flex align-items-center text-light shadow">
        <div className="container">
          <div className="col-sm-6 d-flex d-sm-block flex-column align-items-center">
            <h2 className="mb-0 text-white fw-bold">Bienvenidos a</h2>
            <h1 className="mb-5 text-light fw-bold text-center text-sm-start">
              La Dona Gatona
            </h1>
            <MenuBtn />
          </div>
        </div>
      </header>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-center d-none d-lg-flex">
            <img src={AboutImg} className="img-fluid w-100" alt="about img" />
          </div>
          <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
            <h2 className="fs-1 mb-5 text-uppercase fw-bold">Sobre Nosotros</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              non in totam blanditiis repudiandae perferendis expedita nihil,
              aliquid rem, quam, vel placeat adipisci deserunt voluptatum
              repellendus quasi facilis? Sunt, reprehenderit!!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              impedit ipsam debitis quaerat dolorum nihil nostrum illum
              laboriosam, quo architecto. Accusamus, dolore? Repellat, nam
              maiores error temporibus nisi amet accusantium.
            </p>
            <Link to="/about">
              <button type="button" className="btn btn-outline-dark btn-lg">
                Más sobre nosotros
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="menu-section py-5 text-light shadow">
        <div className="container d-flex flex-column align-items-center">
          <h2 className="fs-1 mb-5 text-uppercase fw-bold">
            Nuestros favoritos
          </h2>
          <div className="row mb-5 w-100">
            <div className="col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0">
              <h3 className="fs-2 mb-5">Donas Gatonas</h3>
              <ul className="px-0">
                <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2">Chispi Dona</p>
                  <p className="fs-3 mx-2 text-light">$1.490</p>
                </li>
                <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2">Raya Dona</p>
                  <p className="fs-3 mx-2 text-light">$1.490</p>
                </li>
                <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2">Coco Dona</p>
                  <p className="fs-3 mx-2 text-light">$1.490</p>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0">
              <h3 className="fs-2 mb-5">Cafés</h3>
              <ul className="px-0">
                <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2">Ristretto</p>
                  <p className="fs-3 mx-2 text-light">$1.990</p>
                </li>
                <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2">Espresso</p>
                  <p className="fs-3 mx-2 text-light">$2.190</p>
                </li>
                <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2">Cappuccino</p>
                  <p className="fs-3 mx-2 text-light">$2.490</p>
                </li>
              </ul>
            </div>
          </div>
          <MenuBtn />
        </div>
      </div>

      <div className="bg-black text-light py-5 shadow">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0">
              <ContactInfo />
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <img src={ContactImage} className="img-fluid w-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
