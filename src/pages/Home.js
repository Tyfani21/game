import Slider from '../components/Slider/slider';
import Barra from './../components/navBar/barra';
import Container from './../components/Container/Container';
import Footer from './../components/footer/footer'
const Home = () => {
    return (
        <div className='background'>
            <section className='content'>
                <Barra/>
                
    <Slider imgLink='https://fanatical.imgix.net/product/original/6b3c63b1-c7cc-4e2e-bcc1-c2b1d4c75445.jpeg?auto=compress,format&w=400&fit=crop&h=225'
    alt='Battlefield Hardline'
    classNumber='18'
    classText='Violência, Conteúdo Sexual'/>
    <Container/>
    <Footer/>
            </section>
        </div>
    )
}
export default Home