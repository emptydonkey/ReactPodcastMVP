import React, {useState, useEffect} from 'react';
var convert = require('xml-js');
import axios from 'axios';

export default function EpisodeTitlePlay({ count, feed }) {
  const [rendered, setRendered] = useState(false);
  const [episodeList, setEpisodeList] = useState([])
  let renderList = [];

  useEffect(() =>{
    console.log(feed)
    axios.get(feed)
    .then(response => {
      console.log(response)
      let jsonFeed = JSON.parse(convert.xml2json(response.data, {compact: true, spaces: 4}))
      renderList = jsonFeed.rss.channel.item
      return jsonFeed.rss.channel.item
      })
      .then(feed => {
        console.log("feed", feed)
        if(feed){
          console.log('feed exists')
          // renderlist = feed
        }
        setRendered(true)
        console.log('episodelist', renderList)
        count ? renderList = renderList.slice(0,count) : renderList = renderList
        })
  }, [])


  return(!rendered) ? <h1>Loading</h1> :(
    <div>
    hi
    {renderList.map(item => {
    return <>hey</>
    }
    )}
    </div>
  )
}