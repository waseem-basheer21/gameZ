/* eslint-disable react/prop-types */
import "./gameDetail.css";

const GameDetail = ({details}) => {
    const {name,description_raw,released,background_image,updated,ratings} = details;
  return (
    <div className="gameDetailCard">
      <img src={background_image} alt="" className="gameDetailImage"  />
      <div className="gameDetailDes">
        <h1 className="text-[3rem] font-bold">{name}</h1>
        <p> {description_raw}</p>
        <p> {ratings.map((item)=>{return(item.title  + ": "+ item.count)}).join(", ")}</p>
        <p>Release Date:{released}</p>
        <p>Updated: {updated}</p>
      </div>
    </div>
  );
};

export default GameDetail;
