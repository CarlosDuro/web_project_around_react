export default function EditProfile({ profile, onSubmit }) {
  function handleSubmit(e) {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const about = e.target.elements.about.value;

    console.log("👤 EditProfile enviado:", { name, about });

    if (onSubmit) {
      onSubmit({ name, about });
    }
  }

  return (
    <form
      className="popup__form"
      name="edit-profile-form"
      onSubmit={handleSubmit}
      noValidate
    >
      <label className="popup__field">
        <input
          className="popup__input"
          type="text"
          id="input-name"
          name="name"
          defaultValue={profile.name}
          placeholder="Nombre"
          required
          minLength="2"
          maxLength="40"
          autoComplete="name"
        />
        <span className="popup__error" id="input-name-error"></span>
      </label>

      <label className="popup__field">
        <input
          className="popup__input"
          type="text"
          id="input-about"
          name="about"
          defaultValue={profile.about}
          placeholder="Acerca de mí"
          required
          minLength="2"
          maxLength="200"
          autoComplete="organization-title"
        />
        <span className="popup__error" id="input-about-error"></span>
      </label>

      <button className="popup__save-button" type="submit">
        Guardar
      </button>
    </form>
  );
}
