import './styles.css'
import carImg from '../../assets/car-card .png'
import Button from '../Button';

const Card = () => {
  return (
    <div className="card">
      <img src={carImg} alt="" />
      <h2>Audi Supra TT</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere maxime
        quis saepe.
      </p>
      <Button/>
    </div>
  );
};

export default Card;
