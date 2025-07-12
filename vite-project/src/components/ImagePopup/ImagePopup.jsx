export default function ImagePopup({ card, onClose }) {
  if (!card) return null; // No renderiza nada si no hay card

  // Cierra popup si se hace clic fuera del contenedor
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("popup")) {
      onClose();
    }
  };

  return (
    <div
      className="popup popup_opened popup_image" // Clase extra para subir popup y estilos específicos
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
