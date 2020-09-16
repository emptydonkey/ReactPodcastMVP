import React, {useState, useEffect, useContext} from 'react';
import { PodcastContext } from './PodcastContext.jsx';
import Show from './Show.jsx';

export default function Podcast({ match }) {
  const { value } = useContext(PodcastContext)

  console.log('podcast', value)
  return(
    <div>
      {JSON.stringify(value)}
    </div>
  )
}