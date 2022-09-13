import React, { Component } from "react"
import { Button, FormControl, InputGroup } from "react-bootstrap"

export class AddComment extends Component {
  state = { comment: "", rate: "3" }

  postComment = async () => {
    const comment = {
      comment: this.state.comment,
      rate: this.state.rate,
      elementId: this.props.asin,
    }

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzE5YjkwZmEyM2M4MzAwMTUzNjhmMjkiLCJpYXQiOjE2NjI2MzAxNjAsImV4cCI6MTY2MzgzOTc2MH0.6MP3FosMk2dFLz2iISr9FtSNa_eEt4btSsOnpo8dUk4",
          },
          body: JSON.stringify(comment),
        }
      )
      if (response.ok) {
        let commnets = await response.json()
        this.props.refreshComments()
        console.log(commnets)
      } else {
        console.log("Couldn't submit comment")
      }
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    return (
      <div>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Comment.."
            aria-label="comment"
            onChange={(event) => this.setState({ comment: event.target.value })}
          />

          <Button onClick={() => this.postComment()}>ADD</Button>
        </InputGroup>
      </div>
    )
  }
}

export default AddComment
