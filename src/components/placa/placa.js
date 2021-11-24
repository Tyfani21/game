import React, {useEffect, useState} from "react";
import './placa.css'
const Placa = () => { 
    const Off = (event) => {
        let antes = document.querySelector('.antes').style.display
    const [toggle, setToggle] = useState(true);
    const [Troca, setTroca] = useState('flex');

    useEffect(() => {
        setTroca((state) => toggle ? 'flex':'none')}, [toggle]
    );}

    return (<div id="bemvindo">
        <div id="placa">
        <h2>Seja Bem-vindo ao Acampamento Meio-sangue.</h2></div>
        <div id="antes" onMouseEnter={Off()}>
        <p> O Acampamento Meio-sangue é voltado para crianças aventureiras de todas as idades. Um lugar divertido e seguro, no qual os pais não precisam sentir preocupação em enviar seus filhos!
            <button id="before">Cadastre seu filho aqui</button></p>
        </div>
        <div id="depois" onMouseLeave={e => setToggle(state => !state)} style={{display: Troca2,}}>
        <p class="page">
            O Acampamento Meio-sangue é voltado para crianças com um pai/mãe divino. Um lugar seguro, onde aprendem história grega, auto-defesa e saem em missões altamente perigosas!
            <button id="after" > <a id="but" href="/quiz">Descubra seu pai/mãe divino</a></button>          </p> 
    </div>
    </div>)
}
export default Placa;