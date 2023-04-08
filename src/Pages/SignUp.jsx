import { Typography } from '@mui/material'
import React, { useState } from 'react'
import { NetflixButton, NetflixInput } from '../Styled/styledComponents'
import '../styles/SignUp.css'
import { auth } from '../firebase'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const history = useNavigate("")

  const register = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, pass)
    .then((authUser) => history("/home"))
    .catch((err)=>alert(err.message))
  }
  
  const signIn = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, pass)
    .then((authUser) => history("/home"))
    .catch((err)=>alert(err.message))
  }

  return (
    <div className='mainSignUp'>
      <Typography variant='h5' align='left'>Iniciar Sesion</Typography>
      <form className='form'>
        <NetflixInput type='email' value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Ingrese Email' className='email'/>
        <NetflixInput type='password' value={pass} onChange={(e)=> setPass(e.target.value)} placeholder='Ingrese Contraseña' className='password'/>
        <NetflixButton type='submit' wide="medium" radius onClick={signIn}>Ingresar</NetflixButton>
        <Typography className="singnUpText" variant='subtitle2'>
          Nuevo en Netflix? {""}
            <span className='signUpLink' onClick={register}>
              Registrate ahora. {""}
            </span>
        </Typography>
      </form>
    </div>
  )
}

export default SignUp

