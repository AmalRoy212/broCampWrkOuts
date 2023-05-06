import React from 'react';
import "./Banner.css";
import { useEffect } from 'react';
import axios from '../../axios';
import {API_Key,IMG_URL} from '../../constants/constans';
import {useState} from 'react'

function Banner() {
  const [movie,setMovie] = useState();
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_Key}&language=en-US`).then((response)=>{
      setMovie(response.data.results[0]);
    })
  },[])
  return (
    <div style={{backgroundImage:`url(${movie ? IMG_URL+movie.backdrop_path : ''})`}}
    className='banner'>
      <div className='content'>
        <h1 className='title'>{movie ? movie.title : ''}</h1>
        <div className='banner_buttons'>
          <button className='button'>Play</button>
          <button style={{marginLeft:'15px'}} className='button'>My List</button>
        </div>
        <h1 className='discription'>{movie ? movie.overview : ''}</h1>
        <div className="fade">

        </div>
      </div>
    </div>
  )
}

export default Banner
