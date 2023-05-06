import React,{useState,useEffect} from 'react';
import "./RowPost.css";
import {API_Key,IMG_URL} from '../../constants/constans';
import axios from '../../axios';
function RowPost() {
  const [movies,setMovies] = useState([]);
  useEffect(()=>{
    axios.get(`discover/tv?api_key=${API_Key}&with_networks=213`).then((response)=>{
      console.log(response.data.results);
       setMovies(response.data.results);
       
    }).catch((err)=>{
      alert(err+'Sorry');
    })
  })
  return (
    <div className='row'>
      <h2 style={{fontSize:'large'}} className='title'>Netflix Originals</h2>
      <div className="posters">
        {
          movies.map((obj)=>{
            <img className='poster' src={`${IMG_URL+obj.backdrop_path}`} alt="" />
          })
        }
        
      </div>
    </div>
  )
}

export default RowPost
