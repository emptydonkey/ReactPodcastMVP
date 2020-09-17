import React, {useState, useEffect, useContext} from 'react';
import {PodcastContext} from './PodcastContext.jsx'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import CardHeader from '@material-ui/core/CardHeader';
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';
import EpisodeTitlePlay from './EpisodeTitlePlay.jsx';
import { format } from 'date-fns/fp'


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export default function Show({podcast}) {
  const [rendered, setRendered] = useState(false);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const { value, setValue } = useContext(PodcastContext)

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  useEffect(()=>{
    setRendered(true);
  }, [])
console.log('Show', value)
  return(!rendered) ? <p>LOADING</p> : (

    <Card className={classes.root} elevation={5}
    onClick={()=> {
            console.log('click', podcast)
            setValue(podcast)
      }}>
      <Link to={`/podcast/${ podcast.collectionName.replace(/\s/g, '') }` }>
        <CardHeader
          title={podcast.collectionName}
          subheader={format(podcast.releaseDate), 'MMM/do/yyyy'}
        />
        <CardMedia
        className={classes.media}
        image={podcast.artworkUrl100}
        />
      </Link>
      {/* <CardContent>

        <EpisodeTitlePlay count={2} feed={podcast.feedUrl}/>
      </CardContent> */}
    </Card>
    );

}