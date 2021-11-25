import './Profile.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Perfil = (props) => {

  const [user, setUser] = useState({});
  const [mounted, setMounted] = useState(false);
  const [notLogged, setNotLogged] = useState(true);

  useEffect(() => {
    setMounted(true)

    if(localStorage.token) {
      const token = localStorage.token;

      const config = {
        headers: { Authorization: `Bearer ${token}`}
      }

      axios.get('/auth/me', config)
      .then(response => {
        setNotLogged(false)
        setUser(response.data)
      })
    }

  }, [mounted])

  return (
    <div className='perfil'>
      <div className='perfil-img'>
        <img src='https://cdn.worldvectorlogo.com/logos/origin-4.svg' alt='Origin Logo' />
      </div>
      {
        !notLogged ? (
          <>
            <h2>{user.nome}</h2>
            <span>Email: {user.email}</span>
            <span>Membro desde: {user.createdAt}</span>
          </>
        ) : (
          <h2>Sem dados do perfil, faça login</h2>
        )
      }
    </div>
  )
}
export default Perfil;