import React, { useState } from 'react'
import '../styles/Login.css'
import logo from '../Images/netflixLogo.png'
import { NetflixButton, NetflixInput } from '../Styled/styledComponents'
import { Typography } from '@mui/material'
import SignUp from '../Pages/SignUp'

const Login = () => {

  const [singnIn, setSignIn] = useState(false)

  return (
    
    <div className='main'>
      <img src={logo} alt="logo" className='logoImg' />
      <NetflixButton radius className='sesionButton'>Iniciar Sesion</NetflixButton>
      <div className='info'>
        {
          singnIn ? (<SignUp/>) : (
            <>
          <Typography variant='h4' gutterBottom>Películas y series ilimitadas y mucho más</Typography>
          <Typography variant='h5'>Disfruta donde quieras. Cancela cuando quieras.</Typography>
          <Typography variant='h6' gutterBottom>¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.</Typography>
          <div className="inputBlock">
            <NetflixInput placeholder='Ingrese Email'/>
            <NetflixButton radius onClick={() => setSignIn(true)}>Comenzar</NetflixButton>
          </div>
          </>
          )
        }
      </div>
    </div>
    
  )
}

export default Login

