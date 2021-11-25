import './Register.css';
import { useState } from 'react';
import axios from 'axios';

export default function Register() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [nick, setNick] = useState('');
  const [pass, setPass] = useState('');
  const [passConfirmation, setPassConfirmation] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const user = {
      nome: nome,
      email: email,
      nick: nick,
      password: pass,
      passwordConfirmation: passConfirmation
    }

    axios.post('user/register', user)
    .then(response => console.log(response))
  }

  return(
    <div className='register'>
      <div className='register-container'>
        <h2>Criar conta</h2>

        <form className='form' onSubmit={handleSubmit}>
          <label>Nome</label>
          <input type='text' required onChange={e => setNome(e.target.value)}/>

          <label>Nickname</label>
          <input type='text' required onChange={e => setNick(e.target.value)}/>

          <label>Endereço de e-mail</label>
          <input type='email' required onChange={e => setEmail(e.target.value)}/>

          <label>Senha</label>
          <input type='password' required onChange={e => setPass(e.target.value)}/>

          <label>Confirmar senha</label>
          <input type='password' required onChange={e => setPassConfirmation(e.target.value)}/>

          <div className='terms'>
            <input type='checkbox' placeholder='wedewdwed' required />
            <label>Eu concordo com os termos do Acordo de usuário da conta Nintendo e confirmo que li a Política de privacidade da Nintendo.</label>
          </div>
          
          <div className='but'>
            <input className='btn' type='submit' value='Continuar' />
          </div>
        </form>
      </div>
    </div>
  )
}