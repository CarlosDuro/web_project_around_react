import React, { useEffect } from "react";

export default function Popup({ title, children, onClose, isOpen }) {
  // Manejar cierre con Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  // Manejar clic en overlay para cerrar
  const handleOverlayClick = (event) => {
    if (event.target.classList.contains("popup")) {
      onClose();
    }
  };

  return (
    <div
      className={`popup ${isOpen ? "popup_opened" : ""}`}
      onMouseDown={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
    >
      <div className="popup__container">
        <button
          aria-label="Cerrar"
          className="popup__close-button"
          type="button"
          onClick={onClose}
        />
        <h3 className="popup__title" id="popup-title">
          {title}
        </h3>
        {children}
      </div>
    </div>
  );
}
