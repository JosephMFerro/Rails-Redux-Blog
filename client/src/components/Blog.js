import React from 'react';
import { connect, } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card } from 'semantic-ui-react';

const Blog = ({ name, body, id }) => (
  <div style = {{margin: "20px"}}>
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Description>{body}</Card.Description>
      </Card.Content>
    </Card>
  </div>
)

export default connect()(Blog);