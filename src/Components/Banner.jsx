import React from 'react'
import { Typography } from '@mui/material'
import '../styles/BannerStyle.css'


const Banner = () => {

    const truncate = (string, n) => string?.length > n ? `${string.substr(0, n-1)} ...` : string
  return (
    <div className='mainBanner' >
        <div className='hero'>
            <div className='content'>
                <Typography variant='h2' component="h1">
                     Movie Title
                </Typography>
                <div>
                    <button className='button'>Play</button>
                    <button className='button'>My List</button>
                </div>
                <Typography style={{wordWrap: "break-word"}} variant='h6' className='description'>
                    {
                        truncate("Movie description: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur nobis veritatis ut asperiores ipsum quos aspernatur distinctio vel! In a blanditiis neque deserunt quasi quos rerum! Voluptates accusantium deserunt consequuntur Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora perferendis mollitia, a sunt quibusdam tempore natus itaque cum ratione, necessitatibus nisi iusto, eligendi recusandae dolores? Suscipit illum eum voluptatem soluta Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat commodi placeat ipsa distinctio harum hic, aliquam nihil soluta perspiciatis non vero vel quibusdam tempora nulla at pariatur libero qui odit.", 150)
                    }
                     
                </Typography>
                <div className='fadeBottom'></div>
            </div>
        </div>
    </div>
  )
}


export default Banner






