import './Login.css'
import axios from 'axios';
import { useState } from 'react'
const Login = () => {
    const [email, setEmail] = useState('');
    const [ password, setPassword ] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        const login = {
            email: email,
            password: password
        }

        axios.post('auth/login', login)
        .then(response => {
            const token = response.data.token;
            localStorage.setItem('token', token)
        })
    }
    return (
        <div className='content'>
      <h2 className='titulo'>Login do usuário</h2>
      <div className='container'>
        
        <form className='login-form' onSubmit={handleSubmit}>

          <input type='text' placeholder='Endereço de e-mail' required
            onChange={e => setEmail(e.target.value)}
          />

          <input type='password' placeholder='Senha' 
            onChange={event => setPassword(event.target.value)}
          />

          <div className='login-ok'>
            <a href='/Profile'>
              <span>Esqueceu sua senha?</span>
            </a>
            <input type='submit' value='Fazer login' />
          </div>
        </form>
        <div className='login-create'>
          <span>Ainda não possui uma conta?</span>
          <a className='btn-create' href='/register'>Criar uma conta</a>
        </div>
      </div>
    </div>

    )
}
export default Login;