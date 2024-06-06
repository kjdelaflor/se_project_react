import "./ItemModal.css";

function ItemModal({ activeModal, onClose, card, handleDeleteCardClick }) {
  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__content modal__content-preview">
        <button
          onClick={onClose}
          type="button"
          className="modal__close modal__close-preview"
        ></button>
        <img
          src={card.imageUrl}
          alt={card.name}
          className="modal__image modal__image-preview"
        />
        <div className="modal__footer">
          <div className="modal__info">
            <h2 className="modal__caption">{card.name}</h2>
            <button
              className="modal__delete"
              type="submit"
              onClick={handleDeleteCardClick}
            >
              Delete item
            </button>
          </div>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
