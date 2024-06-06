import "./SideBar.css";
import avatar from "../../assets/avatar.jpg";

function SideBar() {
  return (
    <div className="sidebar">
      <img className="sidebar__avatar" src={avatar} alt="default avatar" />
      <p className="sidebar__username">Justin Dela Flor</p>
    </div>
  );
}

export default SideBar;
