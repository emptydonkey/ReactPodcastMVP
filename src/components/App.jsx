import React, {useState, useEffect, useContext, useMemo } from 'react';
import Home from './Home.jsx';
import Navbar from './Navbar/Navbar.jsx';
import Podcast from './Podcast.jsx';
import Login from './Login.jsx';
import {PodcastContext} from './PodcastContext.jsx';
import { BrowserRouter, Route } from 'react-router-dom';



export default function App() {
  const [value, setValue] = useState({})
  const providerValue = useMemo(() => ({value, setValue}, [value, setValue]))

console.log('APP', value)
  return(
    <BrowserRouter>
      <Route path='/' component={Navbar}/>
      <PodcastContext.Provider value={providerValue}>
        <Route path='/' exact component={Home}/>
        <Route path="/podcast/:id" exact component={Podcast}/>
      </PodcastContext.Provider>
      <Route path='/login' exact component={Login}/>
      <Route path='/subscriptions' component={Login}/>
    </BrowserRouter>
    );
};
