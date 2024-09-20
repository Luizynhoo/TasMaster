import { useState } from 'react';
import './home.css';
import { toast } from 'react-toastify'

import { Link, replace } from 'react-router-dom';
import { auth } from '../../FireBase'
import { signInWithEmailAndPassword } from 'firebase/auth'

import { useNavigate } from 'react-router-dom'

export default function Home(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();


  async function handleLogin(e) {
    e.preventDefault();

    if(email !== '' && password !== ''){

      await signInWithEmailAndPassword (auth, email, password)
      .then(() =>{
        toast.success("Login realizado com sucesso! Bem-vindo(a) ao TaskMaster")
        setEmail('')
        setPassword('')
        
        navigate('/admin', {replace: true})
      })
      .catch(()=>{
        console.log("Erro ao fazer o login")
      })
      
    }else{
      toast.warn("Preencha todos os campos!")
    }
    
  }

    return(
      <div className='home-container'>
        <h1>TaskMaster</h1>
        <span>Transforme seu planejamento em ação</span>

        <form className='form' onSubmit={handleLogin}>
          <input
            type='email'
            placeholder='Digite seu email...'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type='password'
            placeholder='Digite uma palavra chave...'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type='submit'>Acessar</button>
        </form>

        <Link to="/Register" className='button-link'>
          Não possui uma conta ? Cadastre-se
        </Link>
      </div>
    )
  }