/* eslint-disable react/prop-types */
const CreatorDetailsCard = ({ creator }) => {
  const { name, image, description } = creator;
  return (
    <div className="gameDetailCard">
      <img src={image} alt="" className="creatorDetailImage w-[500px] h-[420px] rounded-lg" />
      <div className="gameDetailDes">
        <h1 className="text-[3rem] font-bold">{name}</h1>
        <p> {description}</p>
      </div>
    </div>
  );
};

export default CreatorDetailsCard;
