import Container from '../../components/Container/Container';
import Card from '../../components/card/card'
import { useState, useEffect } from 'react';
import axios from 'axios';

const WishList = () => {

  const [wishList, setWishList] = useState([]);
  const [mounted, setMounted] = useState(false)
  const [notLogged, setNotLoggend] = useState(true)

  useEffect(() => {
    setMounted(true)

    if(localStorage.token) {
      const token = localStorage.token;

      const config = {
        headers: { Authorization: `Bearer ${token}`}
      }

      axios.get('/game/myWishList', config)
      .then(response => {
        setNotLoggend(false)
        setWishList(response.data.game)
      })
    }
  }, [mounted])

  return(
    <Container title='Lista de Desejos'>
      {
        wishList.map(game => (
          <Card 
            id={game.id}
            image={game.img}
            title={game.nome}
            preco={game.prec}
            key={game.id}
          />
        ))
      }
    </Container>
  )
}
export default WishList;