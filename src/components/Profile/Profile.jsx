import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({
  onCardClick,
  clothingItems,
  handleCardClick,
  closeActiveModal,
  onAddItem,
}) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar />
      </section>
      <section className="profile__clothing-items">
        <ClothesSection
          onCardClick={onCardClick}
          clothingItems={clothingItems}
          handleCardClick={handleCardClick}
          closeActiveModal={closeActiveModal}
          onAddItem={onAddItem}
        />
      </section>
    </div>
  );
}

export default Profile;
