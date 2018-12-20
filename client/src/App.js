import React from 'react';
import { Route, Switch, } from 'react-router-dom';
import BlogForm from './components/BlogForm';
import Blogs from './components/Blogs';
import Blog from './components/Blog';
import Footer from './Footer';
import { Container } from 'semantic-ui-react';

const App = () => ( 
  <div className="App">
  <Container>
    <Switch>
      <Route exact path = "/" component = {Blogs} />
      <Route exact path = "/blogform" component = {BlogForm} />
      <Route exact path = "/blog/:id" component = {Blog} />
    </Switch>
  </Container>
  </div>
);

export default App;