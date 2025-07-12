import { useEffect } from "react";

export default function ImagePopup({ card, onClose }) {
  const isOpen = Boolean(card);

  // Cerrar con la tecla Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  // Cerrar al hacer clic fuera del contenedor de la imagen
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("popup")) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`popup popup_type_image popup_opened`}
      onMouseDown={handleOverlayClick}
    >
      <div className="popup__container popup__container_image">
        <button
          aria-label="Cerrar"
          className="popup__close-button"
          type="button"
          onClick={onClose}
        />
        <img className="popup__image" src={card.link} alt={card.name} />
        <p className="popup__caption">{card.name}</p>
      </div>
    </div>
  );
}
