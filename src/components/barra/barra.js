import './barra.css';

const Barra = () => {
    return (
        <div className='Barra'>
            <h1>Encontre seus companheiros de chalé</h1>
            <form className='barra-form'>
            <input placeholder='Digite o nickname' type='text' required/>
            <input type='submit' value='Procurar'/>
            </form>
        </div>
    )
}
export default Barra;