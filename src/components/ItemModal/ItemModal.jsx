import "./ItemModal.css";

function ItemModal({ activeModal, onClose, card }) {
  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__content modal__content-preview">
        <button
          onClick={onClose}
          type="button"
          className="modal__close modal__close-preview"
        ></button>
        <img
          src={card.link}
          alt={card.name}
          className="modal__image modal__image-preview"
        />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
