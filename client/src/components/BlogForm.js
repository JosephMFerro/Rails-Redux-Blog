import React from 'react';
import { connect, } from 'react-redux';
import { Form, Button } from 'semantic-ui-react';

class BlogForm extends React.Component {
  state = { name: "", body: "", };

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, } = this.props;
    const { name, body, } = this.state;
    dispatch({ type: "ADD_BLOG", blog: { name, body } });
    dispatch({ type: "INC_ID" });
    this.setState({ name: "", body: "", })
    this.props.history.push(`/blogs`);
  }

  handleChange = ({target: {name, value}}) => {
    this.setState({[name]: value });
  }

  render() {

    const { name, body, } = this.state;

    return (
      <div>
        <h3>Add Blog</h3>
        <Form onSubmit={this.handleSubmit}>
        <hr />
          <input
            name='name'
            value={name}
            placeholder="Name"
            title="Blog"
            onChange={this.handleChange} />
            </Form>
        <Form onSubmit={this.handleSubmit}>
          <input
            name='body'
            value={body}
            placeholder="Body"
            title="Body"
            onChange={this.handleChange} />
        </Form>
        <br />
          <Button onClick={this.handleSubmit}>Submit</Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { id: state.nextId, };
}

export default connect(mapStateToProps)(BlogForm);