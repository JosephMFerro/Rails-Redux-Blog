import React from 'react';
import Blog from './Blog';
import { connect, } from 'react-redux';
import { Link } from 'react-router-dom';

const Blogs = ({ blogs }) => {
  return (
    <div>
      <h2>Blogs</h2>
      <hr />
      <Link to = "/blogform">Add a Blog</Link>
      <ul>
        {blogs.map(blog => (
         <Blog key={blog.id} {...blog} />
        ))}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { blogs: state.blogs, };
}

export default connect(mapStateToProps)(Blogs);