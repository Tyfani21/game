import './barra.css';
import { FaRegQuestionCircle, FaHeart, FaUserPlus, FaGamepad, FaUserCircle } from 'react-icons/fa';
const Barra = () => {
    return (
        <div className='nav-barra'>
            <h1><a href='/'>Origin Games</a></h1>
            <div className='bar-links'>
        <ul className='bar-links-list'>
          <li>
            <a className='itens' href=' '>
              <FaRegQuestionCircle/>
              <span className='text' id='sup'>Suporte</span>
            </a>
          </li>
          <li>
            <a className='itens' href='/whishList'>
              <FaHeart />
              <span className='text'>Lista de Desejos</span>
            </a></li>
          <li>
            <a className='itens' href='/login'>
              <FaUserCircle /><span id='sup' className='text'>Login</span>
            </a>
          </li>  
        <li>
            <a className='itens' href='/register'>
              <FaUserPlus />
              <span id='sup' className='text'>Criar</span>
            </a>
          </li>
          <li>
            <a className='itens' href='/profile'>
              <FaGamepad />
              <span id='sup' className='text'>Perfil</span>
            </a>
          </li>
        </ul>
      </div>
      <form className='barra-form'>
            <input className='input-jogo' placeholder='Digite o jogo' type='text' required/>
            <input className='input-sub' type='submit' value='Procurar'></input>
            </form>
            
        </div>
    )
}
export default Barra;