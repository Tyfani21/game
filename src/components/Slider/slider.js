import { useState, useEffect} from 'react';
import { FaAngleRight } from 'react-icons/fa';
import './slider.css';
import axios from 'axios'

const Slider = (props) => {
    const [game, setGame] = useState([]);
    const [mounted, setMounted] = useState(false);

    const getData = async () => {
        await axios.get(`/game/find/${props.id}`)
        .then(response => {
            if(mounted){
                setGame(response.data)
            }
        })
    }
    useEffect(() => {
        setMounted(true)
        getData()
      }, [mounted])
    return(
        <div>
            <img className='img' src={game.image} alt={game.name}/>
            <div className='barr'>
                <span className='disp'>Já disponível</span>
                <button className='mais'> <a href={props.cardLink}>Saiba Mais <FaAngleRight/></a></button>
            <div className='classificacao'> <div className='square'>{props.classificationNumber}</div></div>
            <span className='class-text'>{props.classificationText}</span>
            </div>
        </div>
    )
}

export default Slider;