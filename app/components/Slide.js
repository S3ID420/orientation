'use client';
import React, { useState } from "react";
import Slider from "react-slick";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import './Slide.css'; // Import the custom CSS file

function Slide() {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    className: "center",
    focusOnSelect: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    centerMode: true,
    centerPadding: "15%",
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "15%",
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "30%", // Adjust padding to center
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "30%", // Adjust padding to center
        },
      },
    ],
  };

  const cards = [
    {
      title: "Orientation scolaire",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      icon: "/prof.png",
    },
    {
      title: "Orientation professionnelle",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      icon: "/entreprise.png",
    },
    {
      title: "Orientation universitaire",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      icon: "/uni.png",
    },
    {
      title: "Test d'orientation",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      icon: "/test.png",
    },
    {
      title: "Messagerie",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      icon: "/chat.png",
    },
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index}>
            <Card className={`custom-card ${activeSlide === index ? 'active' : ''}`} style={{ padding: '20px', minHeight: '250px' }}>
              <CardBody>
                <div className="card-icon">
                  <img src={card.icon}></img>
                </div>
                <CardTitle
                  tag="h5"
                  className={`card-title ${activeSlide === index ? 'active' : ''}`}
                  style={{ fontSize: '1.5rem' }}
                >
                  {card.title}
                </CardTitle>
                <CardText style={{ fontSize: '1rem' }}>
                  {card.text}
                </CardText>
              </CardBody>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Slide;
