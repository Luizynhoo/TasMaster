import { useState } from 'react';
import './register.css';
import { toast } from 'react-toastify'

import { Link } from 'react-router-dom';
import { auth } from '../../FireBase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

import { useNavigate } from 'react-router-dom'


export default function Register(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();

    if(email !== '' && password !== ''){
      await createUserWithEmailAndPassword (auth, email, password)
      .then(()=>{
        toast.success("Login realizado com sucesso! Bem-vindo(a) ao TaskMaster")
        setEmail('')
        setPassword('')

        navigate('/admin',{ replace:true })
      })
      .catch(()=>{
        console.log("Erro ao fazer o cadastro")
      })
      
    }else{
      toast.warn("Preencha todos os campos!")
    }
    
  }

    return(
      <div className='home-container'>
        <h1>Cadastre-se</h1>
        <span>Vamos criar a sua conta</span>

        <form className='form' onSubmit={handleRegister}>
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

          <button type='submit'>Cadastrar</button>
        </form>

        <Link to="/" className='button-link'>
          Já possui uma conta ? Faça o login!
        </Link>
      </div>
    )
  }