import React from 'react'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import Row from '../Components/Row'
import requests from '../Requests'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className='mainHome'>
      <Header />    
      <Banner />  
      <Row title="ORIGINALES DE NETFLIX" fetchURL={requests.fetchNetflixOriginal} isLargeRow/>
      <Row title="TENDENCIA" fetchURL={requests.fetchTopRated}/>
      <Row title="ACCION" fetchURL={requests.fetchActionMovie}/>
      <Row title="COMEDIA" fetchURL={requests.fetchComedyMovie}/>
      <Row title="HORROR" fetchURL={requests.fetchHorrorMovie}/>
      <Row title="ROMANCE" fetchURL={requests.fetchRomanceMovie}/>
      <Row title="DOCUMENTALES" fetchURL={requests.fetchDocumentaries}/> 
    </div>
  )
}

export default Home


