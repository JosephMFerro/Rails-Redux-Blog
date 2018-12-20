import React from 'react';
import Blog from './Blog';
import { connect, } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBlogs } from '../reducers/blogs';
import { Header, Button, } from 'semantic-ui-react';
import { isPrimitive } from 'util';

class Blogs extends React.Component {

  componentDidMount() {
    this.props.dispatch(getBlogs())
  }
  
  render() {
    return (
      <div>
        <br />
        <Header as = 'h2' align = 'center'>Blogs</Header>
        <hr />
        <Link to = "/blogform">
          <Button>Add Blog</Button>
        </Link>
        <ul>
          {this.props.blogs.map(blog => (
           <Blog key={blog.id} {...blog} />
          ))}
        </ul>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return { blogs: state.blogs, };
}

export default connect(mapStateToProps)(Blogs);