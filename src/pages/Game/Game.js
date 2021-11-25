import './Game.css';
import { FaRegHeart } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Game = () => {
    const state = useLocation()
    const id = state.state;

    const [jogo, setJogo] = useState({})
    const [mounted, setMounted] = useState(false)

    const getData = async () => {
        await axios.get(`/game/find${id}`)
        .then(response => {
            if(mounted){
                setJogo(response.data)
            }
        })
    }
    useEffect(() =>{
        setMounted(true)
        getData()
    }, [mounted])
    return(
        <div className='jg'>
            <div className='jg-header'>
                <img src={jogo.img} alt={jogo.nome}/>
            </div>
            <div className='jg-wish'>
        <h2>{jogo.nome}</h2>
        <div className='jg-like'>
          <span>R$ {jogo.preco}</span>
          <a href='!#'>
            <FaRegHeart />
          </a>
        </div>
      </div>
      <h3>{jogo.year}</h3>
      <p>{jogo.storyline}</p>
    </div>
    )
}
export default Game;