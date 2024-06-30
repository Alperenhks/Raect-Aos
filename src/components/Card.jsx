import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import '../styles/card.css';

const Card = ({ image, title, description, link }) => {
  useScrollAnimation({ duration: 1000 });

  return (
    <div className="card" data-aos="flip-left">
      <img src={image} alt={title} className="card__image" />
      <div className="card__content">
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>
        <a target='blank' href={link} className="card__button">Dökman</a>
      </div>
    </div>
  );
};

export default Card;
