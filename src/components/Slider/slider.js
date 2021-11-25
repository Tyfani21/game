import { useState, useEffect} from 'react';
import { FaAngleRight } from 'react-icons/fa';
import './slider.css';
import axios from 'axios'

const Slider = (props) => {
    const [jogo, setJogo] = useState([]);
    const [mounted, setMoounted] = useState(false);

    const getData = async () => {
        await axios.get(`/jogos/find/${props.id}`)
        .then(response => {
            if(mounted){
                setJogo(response.data)
            }
        })
    }
    useEffect(() => {
        setMoounted(true)
        getData()
      }, [mounted])
    return(
        <div>
            <img className='img' src={jogo.img} alt={jogo.nome}/>
            <div className='barr'>
                <span className='disp'>Já disponível</span>
                <button className='mais'> <a href={props.cardLink}>Saiba Mais <FaAngleRight/></a></button>
            <div className='classificacao'> <div className='square'>{props.classNumber}</div></div>
            <span className='class-text'>{props.classText}</span>
            </div>
        </div>
    )
}

export default Slider;