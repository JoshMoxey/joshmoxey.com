import React, { Component } from "react";
import { connect} from "react-redux";
import { fetchPost, deletePost } from "../actions"
import { Link } from "react-router-dom"

class PostsShow extends Component {
  componentDidMount() {
    if (!this.props.posts) {
      const {id} = this.props.match.params;
      this.props.fetchPost(id);
    }
  }
  
  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/')
    });
  }
  
  render() {
    if (!this.props.post) {
      return <div>
        Loading...
      </div>
    }
    
    return (
      <div>
        <Link to="/">Home</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >Delete post</button>
        <h2>{this.props.post.title}</h2>
        <h6>{this.props.post.categories}</h6>
        <p>{this.props.post.content}</p>
      </div>
    )
  }
}

function mapStateToProps({posts}, ownProps) {
  return { post: posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);