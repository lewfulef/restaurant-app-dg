import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import "./Menu.css";
import { Card, CardBody, CardText, CardTitle } from "react-bootstrap";
import DonasImg from "../utils/img/donaConAzucar.webp";
import { getDocs, collection } from 'firebase/firestore'


export const Menu = () => {
  const donasCollectionRef = collection(db, "donuts")
  const [donuts, setDonuts] = useState ([])
  const getDonuts = async () => {
    const data = await getDocs(donasCollectionRef)
    setDonuts(data.docs.map(doc => ({...doc.data(), id: doc.id})))
  }

  useEffect(()=>{
    getDonuts()
  },[])

  return (
    <div className="menu-page">
      <header className="mt-5">
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <h1 className="text-light">Menu</h1>
        </div>
      </header>

      <div className="donas my-5">
        <div className="container">
          <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-dark">
            Donas
          </h2>
          <div className="row flex-column-reverse flex-lg-row">
            <div className="col-lg-6 d-flex justify-content-center">
              <img
                src={DonasImg}
                className="img-fluid w-75 mt-4 mt-lg-0"
                alt="donasAzucaradas"
              />
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-around">
              {donuts.map((donut) => {
                return (
                  <div key={donut.id}>
                    <Card className="border-0">
                      <CardBody>
                        <CardTitle className="text-center fs-3">
                          {donut.name}
                        </CardTitle>
                        <CardText className="text-center fs-5">
                          {donut.description}
                        </CardText>
                        <CardText className="text-center fs-3 fw-bold text-dark">
                          ${donut.price}
                        </CardText>
                      </CardBody>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;