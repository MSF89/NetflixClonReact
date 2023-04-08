import { Typography } from '@mui/material'
import React from 'react'
import { NetflixButton } from '../Styled/styledComponents'

const Plans = ({cost, children, color, wide}) => {
  return (
    <div className='mainPlans'>
      <Typography className='standard' variant='h5'>
        {children}
      </Typography>
      <NetflixButton color={color} wide={wide}>Subscribe</NetflixButton>
    </div>
  )
}

export default Plans

