import { useState } from "react";
import Card from "./components/Card/Card.jsx";
import Popup from "./components/Popup/Popup.jsx";
import NewCard from "./form/NewCard/NewCard.jsx";
import EditProfile from "./form/EditProfile/EditProfile.jsx";
import EditAvatar from "./form/EditAvatar/EditAvatar.jsx";
import ImagePopup from "./components/ImagePopup/ImagePopup.jsx";

const initialCards = [
  {
    isLiked: false,
    _id: "1",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    isLiked: false,
    _id: "2",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
];

export default function Main() {
  const [popupType, setPopupType] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cards, setCards] = useState(initialCards);
  const [profile, setProfile] = useState({
    name: "Jacques Cousteau",
    about: "Explorer",
  });
  const [avatar, setAvatar] = useState("/images/Avatar.jpg");

  function handleOpenPopup(type) {
    setPopupType(type);
  }

  function handleClosePopup() {
    setPopupType(null);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleCloseImagePopup() {
    setSelectedCard(null);
  }

  function handleCardLike(cardId) {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card._id === cardId ? { ...card, isLiked: !card.isLiked } : card
      )
    );
  }

  function handleCardDelete(cardId) {
    setCards((prevCards) => prevCards.filter((card) => card._id !== cardId));
  }

  function handleUpdateProfile({ name, about }) {
    console.log("✅ Actualizando perfil:", name, about);
    setProfile({ name, about });
    handleClosePopup();
  }

  function handleUpdateAvatar({ avatarUrl }) {
    console.log("✅ Actualizando avatar:", avatarUrl);
    setAvatar(avatarUrl);
    handleClosePopup();
  }

  function handleAddCard({ name, link }) {
    console.log("✅ Añadiendo tarjeta:", name, link);
    const newCard = {
      _id: Date.now().toString(),
      name,
      link,
      isLiked: false,
    };
    setCards([newCard, ...cards]);
    handleClosePopup();
  }

  function getPopupContent() {
    switch (popupType) {
      case "editAvatar":
        return {
          title: "Actualizar avatar",
          content: <EditAvatar onSubmit={handleUpdateAvatar} />,
        };
      case "editProfile":
        return {
          title: "Editar perfil",
          content: (
            <EditProfile profile={profile} onSubmit={handleUpdateProfile} />
          ),
        };
      case "newCard":
        return {
          title: "Nuevo lugar",
          content: <NewCard onSubmit={handleAddCard} />,
        };
      default:
        return null;
    }
  }

  const popupContent = getPopupContent();

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img src={avatar} alt="Avatar" className="profile__avatar" />
          <button
            className="profile__avatar-edit-button"
            title="Editar avatar"
            onClick={() => handleOpenPopup("editAvatar")}
          >
            ✎
          </button>
        </div>

        <div className="profile__information">
          <div className="profile__container">
            <h1 className="profile__name">{profile.name}</h1>
            <button
              className="profile__edit-button"
              onClick={() => handleOpenPopup("editProfile")}
            />
          </div>
          <p className="profile__about">{profile.about}</p>
        </div>

        <button
          className="profile__add-button"
          aria-label="Add card"
          type="button"
          onClick={() => handleOpenPopup("newCard")}
        />
      </section>

      <section className="cards">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={handleCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          ))}
        </ul>
      </section>

      {popupType && popupContent && (
        <Popup
          onClose={handleClosePopup}
          title={popupContent.title}
          isOpen={true} // ✅ Necesario para mostrar el popup
        >
          {popupContent.content}
        </Popup>
      )}

      {selectedCard && (
        <ImagePopup
          card={selectedCard}
          onClose={handleCloseImagePopup}
          isOpen={true}
        />
      )}
    </main>
  );
}
