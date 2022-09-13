import React, { Component } from "react"
import { Button } from "react-bootstrap"

export class CommentList extends Component {
  deleteComment = async (comment) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${comment._id}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzE5YjkwZmEyM2M4MzAwMTUzNjhmMjkiLCJpYXQiOjE2NjI2MzAxNjAsImV4cCI6MTY2MzgzOTc2MH0.6MP3FosMk2dFLz2iISr9FtSNa_eEt4btSsOnpo8dUk4",
          },
        }
      )
      if (response.ok) {
        let comments = await response.json()
        console.log(comments)
      } else {
        console.log("Failed to Delete")
      }
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.comments.map((comment) => (
            <li key={comment._id}>
              {comment.comment}
              <Button
                variant="danger"
                className="m-2"
                onClick={() => this.deleteComment(comment)}
              >
                X
              </Button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default CommentList
