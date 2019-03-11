import React, {Component} from 'react'

class Comment extends Component {
  render(props) {
    return(
      <div className="comment">{this.props.commentText}</div>
    )
  }
}

export default Comment