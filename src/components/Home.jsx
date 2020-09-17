import React, {useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Show from './Show.jsx';
import { Route } from 'react-router-dom';
import {PodcastContext} from './PodcastContext.jsx'

export default function Home() {
  const [rendered, setRendered] = useState(false);
  const [pods, setPods] = useState([]);
  const { value, setValue } = useContext(PodcastContext)

  useEffect(()=>{
    axios.get('/default')
    .then(data =>
      setPods(data.data))
      .then(() =>{
        setRendered(true);
      })
  }, [])

console.log('HOME', PodcastContext)
  return(!rendered) ? <h1>Loading</h1> :(
    <div className='feed'>
      {pods.map(pod => (
        <div className='show'>
          <Show podcast={pod} />
        </div>
      ))}
    </div>
    );
};