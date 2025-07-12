import React from "react";

export default function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const { _id, name, link, isLiked } = card;

  // Objeto para ImagePopup
  const imageComponent = {
    name,
    link,
  };

  // Toggle like
  const handleLikeClick = () => {
    onCardLike(_id);
  };

  // Delete card
  const handleDeleteClick = () => {
    onCardDelete(_id);
  };

  return (
    <li className="card">
      <img
        className="card__image"
        src={link}
        alt={name}
        onClick={() => onCardClick(imageComponent)}
      />
      <button
        aria-label="Delete card"
        className="card__delete-button"
        type="button"
        onClick={handleDeleteClick}
      />
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Like card"
          type="button"
          className={`card__like-button ${
            isLiked ? "card__like-button_active" : ""
          }`}
          onClick={handleLikeClick}
        />
      </div>
    </li>
  );
}
