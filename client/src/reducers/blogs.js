  
const blogs = ( state = [], action ) => {
  switch(action.type) {
    case 'BlOGS':
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

export default blogs;