import React from 'react';
import Slider from 'react-slick';
import './SlideF.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlideF = () => {
  const slides = [
    {
      imageClass: 'slide-image1',
      text: 'À propos de nous',
      description:
        'Notre site offre un accompagnement personnalisé pour aider les élèves et les étudiants à naviguer dans les différentes étapes de leurs parcours scolaire, universitaire et professionnel.',
    },
    {
      imageClass: 'slide-image2',
      text: 'Accompagnement personnalisé',
      description:
        'Grâce à des outils d\'évaluation des aptitudes et des intérêts, nous fournissons des conseils sur les filières d\'études et des informations sur les établissements et le monde des professions.',
    },
    {
      imageClass: 'slide-image3',
      text: 'Conseils sur les études',
      description:
        'Notre mission est de soutenir chaque élève et étudiant dans la réalisation de son projet scolaire, académique, professionnel et dans son projet de vie.',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slider-all">
      <Slider {...settings} className="slider">
        {slides.map((slide, index) => (
          <div key={index} className={`slide ${slide.imageClass}`}>
            <div className="overlay"></div>
            <div className="content my-auto">
              <h1>{slide.text}</h1>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlideF;
