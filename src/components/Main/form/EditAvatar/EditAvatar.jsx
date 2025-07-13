export default function EditAvatar({ onSubmit }) {
  function handleSubmit(e) {
    e.preventDefault();
    const avatarUrl = e.target.elements.avatar.value;

    console.log("🖼 EditAvatar enviado:", avatarUrl);

    if (onSubmit) {
      onSubmit({ avatarUrl });
    }
  }

  return (
    <form
      className="popup__form"
      name="edit-avatar-form"
      onSubmit={handleSubmit}
      noValidate
    >
      <label className="popup__field">
        <input
          className="popup__input"
          type="url"
          name="avatar"
          id="avatar-url"
          placeholder="URL del avatar"
          required
          autoComplete="url"
        />
        <span className="popup__error" id="avatar-url-error"></span>
      </label>

      <button className="popup__save-button" type="submit">
        Actualizar
      </button>
    </form>
  );
}
