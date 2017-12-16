import React, {Component} from "react";
import { Field, Form, reduxForm } from "redux-form"
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import { createPost } from "../actions"

class PostsNew extends Component {
  renderField(field) {
    
    const { meta: { touched, error }} = field
    
    const className = `form-group ${touched && error ? 'has-danger' : ''}`
    
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          placeholder={field.label}
          {...field.input}
          //give me all of the object's props to be
          //sent as props to the input tag
        />
        <div className="text-help">
          {touched ? error : ""}
        </div>
      </div>
    )
  }
  
  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push("/")
    })
  }
  
  render(){
    const { handleSubmit } = this.props;
    
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn">Cancel</Link>
      </form>
    )
  }
}

function validate(values) {
  const errors = { }
  //validate inputs

  if (!values.title) { //if false, assign error
    errors.title = "Please enter a title"
  }
  if (!values.categories) {
    errors.categories = "Please enter a cat"
  }
  if (!values.content) {
    errors.content = "Enter some content please"
  }
  
  
    //if errors is empty, form is good to submit
    //else, any properties, form is invalid
  return errors
}

export default reduxForm({
  connect:
  validate,
  form: 'PostsNewForm' //unique
})(
  connect(null,{createPost})(PostsNew)
);