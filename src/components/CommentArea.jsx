import React, { Component } from "react"
import AddComment from "./AddComment"
import CommentList from "./CommentList"
import Loading from "./Loading"

export class CommentArea extends Component {
  state = { comments: [] }

  getComments = async () => {
    this.props.loadingOn()
    try {
      const responese = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzE5YjkwZmEyM2M4MzAwMTUzNjhmMjkiLCJpYXQiOjE2NjI2MzAxNjAsImV4cCI6MTY2MzgzOTc2MH0.6MP3FosMk2dFLz2iISr9FtSNa_eEt4btSsOnpo8dUk4",
          },
        }
      )
      this.props.loadingOff()
      if (responese.ok) {
        let comments = await responese.json()
        this.setState({ comments: comments })

        console.log(comments)
      } else {
        console.log("Didn't fetch")
      }
    } catch (error) {
      console.error(error)
    }
  }

  componentDidMount() {
    this.getComments()
  }
  componentDidUpdate(prevProps) {
    if (this.props.asin !== prevProps.asin) {
      this.getComments()
    }
  }

  render() {
    return (
      <div>
        <AddComment
          asin={this.props.asin}
          refreshComments={this.getComments}
        ></AddComment>
        <CommentList comments={this.state.comments}></CommentList>
      </div>
    )
  }
}

export default CommentArea
