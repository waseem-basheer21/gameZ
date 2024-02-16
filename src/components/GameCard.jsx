/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import "./gameCard.css";

const GameCard = ({ game }) => {
  const { name, background_image, image_background, released, id, image } =
    game;

  return (
    <div className="gameCard">
      <Link to={`/gamedetails/${id}`}>
        <img
          src={background_image || image || image_background}
          alt=""
          className="cardImage"
        />
      </Link>
      <h2 className="text-black text-[20px] font-bold pt-2">{name}</h2>
      <p className="text-black text-[18px] pt-2">{released}</p>
    </div>
  );
};

export default GameCard;
