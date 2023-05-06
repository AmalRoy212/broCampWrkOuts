import React,{useState,useEffect} from 'react';
import "./RowPost.css";
import {API_Key, IMG_URL} from '../../constants/constans';
import axios from '../../axios';
import Youtube from 'react-youtube';

function RowPost(props) {
  const [movies,setMovies] = useState([]);
  const [urlId,setUrlId] = useState('');
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      setMovies(response.data.results);
    }).catch((err)=>{
      // alert(err+'Sorry');
    })
  },[])
  //youtube modification options from react youtube module
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const movieHandler = (id)=>{
    axios.get(`movie/${id}/videos?api_key=${API_Key}&language=en-US`).then((response)=>{
      if(response.data.results.length !== 0){
        setUrlId(response.data.results[0]);
      }
    })
  }
  return (
    <div className='row'>
      <h2 style={{fontSize:'large'}} className='title'>{props.title}</h2>
      <div className="posters">
        {
          movies.map((obj)=>
            <img onClick={()=>movieHandler(obj.id)} className={props.isSmall ? 'smallPoster':'poster'} src={`${IMG_URL+obj.backdrop_path}`} alt="" />
          )
        }
      </div>
      {urlId && <Youtube opts={opts} videoId={urlId.key}/>}
    </div>
  )
}

export default RowPost
