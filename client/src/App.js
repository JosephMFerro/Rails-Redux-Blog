import React from 'react';
import { Route, Switch, } from 'react-router-dom';
import BlogForm from './components/BlogForm';
import Blogs from './components/Blogs';
import Blog from './components/Blog';
import Footer from './Footer';

const App = () => ( 
  <div className="App">
  <Switch>
    <Route exact path = "/" component = {Blogs} />
    <Route exact path='/blogs' component = {Blogs} />
    <Route exact path = "/blogform" component = {BlogForm} />
    <Route exact path = "/blog/:id" component = {Blog} />
  </Switch>
  </div>
);

export default App;