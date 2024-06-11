import "./ClothesSection.css";
// import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({ onCardClick, clothingItems, handleCardClick }) {
  return (
    <div className="clothes-section">
      <div className="clothes-info">
        <div className="clothes-section-title">Your Items</div>
        <button
          onClick={handleCardClick}
          className="clothes-add-button"
          type="button"
        >
          + Add New
        </button>
      </div>
      <ul className="clothes-section__items">
        {clothingItems.map((item) => {
          return (
            <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
