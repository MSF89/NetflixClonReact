import React from 'react'
import '../styles/Profile.css'
import avatarNetflix from '../Images/avatarNetflix.jpg'
import { Typography } from '@mui/material'
import Header from '../Components/Header'
import Plans from '../Components/Plans'
import { NetflixButton } from '../Styled/styledComponents'
import { auth } from '../firebase'
import { Link } from 'react-router-dom'

const Profile = () => {

  const signOut = () =>{
    auth.signOut()
  }

  return (
    <div className='mainProfile'>
      <Header/>
      <Typography variant='h3'>Editar Perfil</Typography>
      <div className="bodyProfile">
        <div className="avatarProfile">
          <img src={avatarNetflix} alt="avatar" />
          <div className="details">
            <div className="plans">
              <Typography variant='h6'>Email Usuario</Typography>
              <Typography className='plansText' variant='h5' gutterBottom>Plans</Typography>
              <Plans cost={6.99}>Netflix Standard</Plans>
              <Plans cost={11.99}>Netflix Basico</Plans>
              <Plans wide="medium" color="gray" cost={6.99}>Netflix Premium</Plans>
              <Link to="/login">
                <NetflixButton wide="fullWidth" onClick={signOut}>Sign Out</NetflixButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile


