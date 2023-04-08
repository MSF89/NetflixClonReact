import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import AppBar from '@mui/material/AppBar';
import { Avatar, Toolbar } from '@mui/material';
import logo from '../Images/netflixLogo.png'
import { Link } from 'react-router-dom';
import '../styles/HeaderStyle.css'

const Header = () => {
    const [show, setShow] = useState(false)

    const hideHeader = () =>{
        if (window.scrollY > 100){
            setShow(true)
        } else {
            setShow(false)
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll", hideHeader);
        return ()=>window.removeEventListener("scroll", hideHeader)
    },[])
  return (
    <DivApp position='sticky'>
      <AppBar elevation={0} className={`${'header'} ${show && 'transparent'}`}>
        <Toolbar className='toolbar'>
            <Link to={"/home"}> 
                    <img className='imgLogo' src={logo} alt="logo" />
            </Link>
            <Link to={"/profile"}>
                <Avatar variant='square' style={{cursor: "pointer"}}/>
            </Link>
        </Toolbar>
      </AppBar>
    </DivApp>
  )
}

export default Header

const DivApp = styled.div `
 
  .header{
    background-color: #111;
    top: 0;
    left: 0;
    right: 0:
  }
  .transparent{
    background-color: transparent;
  }
  
`
