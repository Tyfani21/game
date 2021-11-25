import './barra.css';
import { FaRegQuestionCircle, FaHeart, FaRegUser } from 'react-icons/fa';
const Barra = () => {
    return (
        <div className='nav-barra'>
            <h1>Origin Games</h1>
            <form className='barra-form'>
            <input className='input-jogo' placeholder='Digite o jogo' type='text' required/>
            <input className='input-sub' type='submit' value='Procurar'></input>
            </form>
            <div className='bar-links'>
        <ul className='bar-links-list'>
          <li>
            <a className='itens' href=' '>
              <FaRegQuestionCircle/>
              <span className='text' id='sup'>Suporte</span>
            </a>
          </li>
          <li>
            <a className='itens' href='#!'>
              <FaHeart />
              <span className='text'>Lista de Desejos</span>
            </a></li>
          <li>
            <a className='itens' href='#!'>
              <FaRegUser />
              <span className='text'>Fazer Login/Criar conta</span>
            </a>
          </li>
        </ul>
      </div>
        </div>
    )
}
export default Barra;