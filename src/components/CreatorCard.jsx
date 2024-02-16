/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./gameCard.css";

const CreatorCard = ({ creator }) => {
   const { name,image,id,games_count } =  creator;
   
  return (
    <div className="gameCard">
      <Link to={`/creatordetails/${id}`}>
        <img
          src={ image }
          alt=""
          className="cardImage"
        />
      </Link>
      <h2 className="text-black pt-2">{name}</h2>
      <p className="text-black">{games_count}</p>
     
    </div>
  );
};

export default CreatorCard;
