import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Typography } from '@mui/material'
import '../styles/Row.css'
import instance from '../axios'

const Row = ({title, fetchURL, isLargeRow}) => {
  const [movies, setMovies] = useState([])
  
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(()=>{
    const fetchData = async () =>{
      const request = await axios.get(instance + fetchURL)
      setMovies(request.data.results)
      console.log(request);
      return request
    };
    fetchData()
  }, [fetchURL])
  return (
    <div className='mainRow'>
      <Typography variant='h4'>{title}</Typography>
      <div className="posters">
         {
          movies.map((movie)=>
            ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
              <img 
                className={`poster" ${isLargeRow && "posterLarge"}`} 
                key={movie.id} 
                src={`${base_url} ${isLargeRow ? movie.poster_path : movie?.backdrop_path}`} 
                alt={movie?.name} 
              />
            )
          )
        } 
      </div>
    </div>
  )
}

export default Row

