import React, {Component} from "react";
import {connect} from "react-redux"
import {fetchPosts} from "../actions/index"
import {Link} from "react-router-dom"
import _ from "lodash"

class PostsIndex extends Component {
  componentDidMount() {
    //when this component is rendered for the first time :)
    this.props.fetchPosts()
  }
  
  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <Link to={`/posts/${post.id}`}>
          <li className="list-group-item" key={post.id}>
            {post.title}
          </li>
        </Link>
      )
    })
  }
  
  render() {
    console.log(this.props.posts)
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary"
                to="/posts/new">
            Add a post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {posts: state.posts};
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);