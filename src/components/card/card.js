import { FaRegHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './card.css';
import axios from 'axios';
const Card = (props) => {
    const navigate = useNavigate();
    const goToPage = () => {
      navigate('/game', { state: props.id})
    }

    const wishGame = () => {
      const token = localStorage.token;
      const config = {
        header: { Authorization: `Bearer ${token}`}
      }
      const id = props.id;

      axios.get(`/game/wish/${id}`, config)
    }
    return (
    <div className="box">
        <div className='card-item' onClick={goToPage}>
        <div className="img">
            <img src={props.img} alt={props.titulo}></img>
        </div>
        <div className="titulo">
            <h2 className='card-title'>{props.titulo}</h2>
        </div>
        <div className="Preço">
          <span className='card-preço'>{'R$ '+ props.preco}</span> 
        </div>
        </div> 
        <button className='wishlist' onClick={wishGame}>
        <FaRegHeart />
      </button>
    </div>)
}
export default Card;