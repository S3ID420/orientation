'use client'
import React from "react";
import { Button } from "reactstrap";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "./components/Slide"; // Ensure correct import

export default function Home() {
  return (
    <main className="page-background bd-light">
      <div className="d-flex">
        <div className="my-auto ps-5 ms-5">
          <h2 className="display-2">
            Votre{" "}
            <span
              style={{
                background: `-webkit-linear-gradient(45deg, #6675f7, #57007b)`,
                WebkitBackgroundClip: `text`,
                WebkitTextFillColor: `transparent`,
              }}
            >
              guide
            </span>
          </h2>
          <h1 className="display-2 fw-bold">
            d'orientation{" "}
            <span
              style={{
                background: `-webkit-linear-gradient(45deg, #6675f7, #57007b)`,
                WebkitBackgroundClip: `text`,
                WebkitTextFillColor: `transparent`,
              }}
            >
              digitale{" "}
            </span>
          </h1>
          <h5 className="mt-5 d-5" style={{ fontSize: "1.5rem" }}>
            Nous vous aidons à choisir votre future avec
          </h5>
          <h5 className="pt-2" style={{ fontSize: "1.5rem" }}>
            une approche personnalisée et des conseils d'experts.
          </h5>
          <div className="pt-5 mt-2">
            <Button className="customButton">Commencer</Button>
          </div>
        </div>
        <div
          className=""
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="logo.png" alt="Logo" className="img-fluid large-img" />
        </div>
      </div>
      <div className="text-center mt-5 mb-4">
        <h1 className="fw-bold me-5 pe-5">Nos services</h1>
        <div className="ms-5 ps-5 pt-4">
          <div className="col-12">
            <Slide />
          </div>
        </div>
      </div>
    </main>
  );
}
