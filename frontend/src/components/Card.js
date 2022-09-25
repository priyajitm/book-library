const Card = ({id, image, handleClick}) => {

  return (
    <div className="card">
      <img src={image} className="card-img-top" alt="..." onClick={() => handleClick(id)}/>
    </div>
  );
};

export default Card;
