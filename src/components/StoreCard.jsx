/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./gameCard.css";

const StoreCard = ({ store }) => {
  const { name, image_background, games_count } = store;
  return (
    <div className="gameCard">
      <Link to="">
        <img src={image_background} alt="" className="cardImage" />
      </Link>
      <h2 className="text-black pt-2">{name}</h2>
      <p className="text-black">{games_count}</p>
    </div>
  );
};

export default StoreCard;
