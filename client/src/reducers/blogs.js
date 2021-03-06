import axios from 'axios';

const BLOGS = 'BLOGS'

export const getBlogs = () => {
  return (dispatch) => {
    axios.get('/api/blogs')
    .then(res => dispatch({ type: BLOGS, blogs: res.data}))
  }
}

export default ( state = [], action ) => {
  switch(action.type) {
    case BLOGS:
    return action.blogs
    case 'ADD_BLOG':
      return [action.blog, ...state];
    case 'DELETE':
      return state.filter( blog => {
        return (blog.id !== action.id)
      })
    default:
      return state
  }
}