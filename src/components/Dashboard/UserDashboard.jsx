import { useState } from "react";
import Topbar from "../Topbar/Topbar";
import "./assets/dashboard.css";
import { cvDesigns } from "./assets/dashData";
import { Link } from "react-router-dom";


const UserDashboard = () => {
  const [visibleCards, setVisibleCards] = useState(4);

  const handleLoadMore = () => {
    // Increase the number of visible cards by, for example, 4 on each click
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 4);
  };

  return (
    <div className="dashContainer">
      <Topbar />
      <div className="dashMain">
        <h1 className="dashMainHero">Pick a template for your CV</h1>
        <div className="dashCardContainer">
          {cvDesigns.slice(0, visibleCards).map((data, index) => (
            <Link className="dashLink" key={index} to="/Resume">
              <div className="dashCard">
                <img className="dashCardCvImg" src={data.img} alt="" />
                <p className="dashCardHeader">{data.header}</p>
                <p className="dashCardText">{data.text}</p>
              </div>
            </Link>
          ))}
        </div>
        {visibleCards < cvDesigns.length && (
          <button className="loadMoreButton" onClick={handleLoadMore}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
