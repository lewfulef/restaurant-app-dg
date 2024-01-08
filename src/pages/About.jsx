import React from "react";
import "./About.css";
import AboutDona from "../utils/img/donasPreparacion.jpg";
import AboutDona2 from "../utils/img/donasDeCafe.jpeg";

export const About = () => {
  return (
    <div className="about-page">
      <header className="mt-5">
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <h1 className="text-light">Sobre Nosotros</h1>
        </div>
      </header>
      <div className="container my-5">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          sed quam, placeat enim similique sit iusto doloribus quibusdam officia
          qui reprehenderit cumque sequi numquam asperiores eum saepe deserunt
          modi expeditamiausi.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
          dignissimos assumenda adipisci ad soluta et placeat laborum delectus
          sed nobis, id maiores voluptates nemo rerum, consequuntur ut modi.
          Ipsam, aspernatur miau.
        </p>
        <div className="row">
          <div className="col-lg-6">
            <img
              src={AboutDona2}
              className="img-fluid my-4"
              style={{ objectFit: "cover", height: "90%", width: "100%" }}
            />
          </div>
          <div className="col-lg-6">
            <img
              src={AboutDona}
              className="img-fluid my-4"
              style={{ objectFit: "cover", height: "90%", width: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;