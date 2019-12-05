import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import PostPage from './Pages/PostPage';
import AllPosts from './Pages/AllPosts';
import CreatePost from './Pages/CreatePage';


const App = ()=>{
  return (
    <div style={{ borderTop: '3px solid #5A67D8' }}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/post/:id" component={PostPage} />
        <Route exact path="/allPosts" component={AllPosts} />
        <Route path="/createPost" component={CreatePost} />
      </Switch>
    </div>
  );
}

export default App;
