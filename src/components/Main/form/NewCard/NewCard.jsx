export default function NewCard({ onSubmit }) {
  function handleSubmit(e) {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const link = e.target.elements.link.value;
    if (onSubmit) {
      onSubmit({ name, link });
    }
  }

  return (
    <form
      className="popup__form"
      name="new-card-form"
      onSubmit={handleSubmit}
      noValidate
    >
      <label className="popup__field">
        <input
          className="popup__input"
          type="text"
          id="input-title"
          name="name"
          placeholder="Título"
          required
          minLength="2"
          maxLength="50"
          autoComplete="off"
        />
        <span className="popup__error" id="input-title-error"></span>
      </label>

      <label className="popup__field">
        <input
          className="popup__input"
          type="url"
          id="input-url"
          name="link"
          placeholder="Enlace a la imagen"
          required
          autoComplete="url"
        />
        <span className="popup__error" id="input-url-error"></span>
      </label>

      <button className="popup__save-button" type="submit">
        Crear
      </button>
    </form>
  );
}
