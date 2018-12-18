import React from 'react';
import { connect, } from 'react-redux';
import { Link } from 'react-router-dom';

const Blog = ({ name, body, id }) => (
  <div style = {{width: "300px", border: "3px solid black", textAlign: "center"}}>
    <Link to = {`/blog/${id}`}>
      <h4>{name}</h4>
    </Link>
    <hr />
    <p>{body}</p>
  </div>
)

export default connect()(Blog);