import React from 'react'
import Profile from '../Pages/Profile'
import Home from '../Pages/Home'
import Paypal from '../Pages/Paypal'
import SignUp from '../Pages/SignUp'

const Switch = () => {
  return (
    <div>
      <SignUp/>
      <Paypal/>
      <Profile/>
      <Home/>
    </div>
  )
}

export default Switch
