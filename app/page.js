'use client'
import React from "react";
import { Button } from "reactstrap";
import "./Home.css";
import Slide from "./components/Slide"; 
import Link from 'next/link';


export default function Home() {
  return (
    <main className="page-background bd-light">
      <div className="d-flex">
        <div className="my-auto ps-5 ms-5">
          <h2 className="display-2">
            Votre{" "}
            <span
              style={{
                background: "-webkit-linear-gradient(45deg, #6675f7, #57007b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              guide
            </span>
          </h2>
          <h1 className="display-2 fw-bold">
            d'orientation{" "}
            <span
              style={{
                background: "-webkit-linear-gradient(45deg, #6675f7, #57007b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
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
            display: "block", /* Changed to block for traditional centering */
            textAlign: "center", /* Center the image */
          }}
        >
          <img src="logo.png" alt="Logo" className="img-fluid large-img" />
        </div>
      </div>
      <div className="text-center mt-5 mb-4">
        <h1 className="fw-bold">Nos services</h1>
        <div className="pt-4">
          <div className="col-12 position-relative">
            <Slide />
            <Link href="ser" className="arrow-link">
              <img src="/arrow.png" alt="Arrow" className="arrow-img" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
