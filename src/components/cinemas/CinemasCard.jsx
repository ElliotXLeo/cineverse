import { Link } from "react-router-dom";

const CinemasCard = ({ premiere }) => {
  const { description, image } = premiere;
  return (
    <div className="home-gallery__card-container">
      <img src={image} alt={description} className="home-gallery__card-image" loading="lazy" />
      <div className="home-gallery__card-extra">
        <Link to="/autenticacion/login" className="home-gallery__card-buy">Comprar</Link>
        <span className="home-gallery__card-description">{description}</span>
      </div>
    </div>
  );
};

export default CinemasCard;