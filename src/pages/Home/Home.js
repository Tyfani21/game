import Slider from '../../components/Slider/slider';
import Container from '../../components/Container/Container';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Card from '../../components/card/card';

const Home = () => {
    const [jogos, setJogos] = useState([]);
    const [mounted, setMounted] = useState(false)
    const getData = async () =>{
        await axios.get('/game/findMany')
        .then(response => {
            if(mounted){
                setJogos(response.data)
            }
        })
    }
    useEffect(() => {
    
            setMounted(true)
            getData()
    }, [mounted])
    
    return (
        <div className='background'>
            <section className='content'>
                
    <Slider id=' '
    classNumber='18'
    classText='Violência, Conteúdo Sexual'/>
    <Container title='Destaques'>
        {jogos.map(jogo =>(
            <Card
            id={jogo.id}
            img={jogo.img}
            title={jogo.nome}
            preco={jogo.preco}
            key={jogo.id}/>
        ))}
    </Container>
            </section>
        </div>
    )
}
export default Home