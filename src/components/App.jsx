import React, {useState, useEffect, useContext } from 'react';
import Home from './Home.jsx';
import Navbar from './Navbar/Navbar.jsx'
import Podcast from './Podcast.jsx'
import Login from './Login.jsx'
import { BrowserRouter, Route } from 'react-router-dom';
import { PodcastContext } from './PodcastContext.jsx'


export default function App() {
  const [value, setValue] = useState('ContextValue')


  return(
    <BrowserRouter>
      <Route path='/' component={Navbar}/>
      <PodcastContext.Provider value={value, setValue}>
        <Route path='/' exact component={Home}/>
        <Route path="/podcast/:id" exact component={Podcast}/>
      </PodcastContext.Provider>
      <Route path='/login' exact component={Login}/>
      <Route path='/subscriptions' component={Login}/>
    </BrowserRouter>
    );
};
