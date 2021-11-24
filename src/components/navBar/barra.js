import './barra.css';

const Barra = () => {
    return (
        <div className='nav-barra'>
            <h1>Origin Games</h1>
            <form className='barra-form'>
            <input className='input-jogo' placeholder='Digite o jogo' type='text' required/>
            <input className='input-sub' type='submit' value='Procurar'/>
            </form>
        </div>
    )
}
export default Barra;