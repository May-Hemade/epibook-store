import React, { Component } from "react"
import { useState } from "react"
import { Button, FormControl, InputGroup } from "react-bootstrap"

const AddComment = (props) => {
  const [comment, setComment] = useState("")
  const [rate, setRate] = useState("3")

  const postComment = async () => {
    console.log(props.asin)

    const commentBody = {
      comment: comment,
      rate: rate,
      elementId: props.asin,
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
          body: JSON.stringify(commentBody),
        }
      )
      if (response.ok) {
        let commnets = await response.json()
        props.refreshComments()
        console.log(commnets)
      } else {
        console.log("Couldn't submit comment")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Comment.."
          aria-label="comment"
          onChange={(event) => setComment(event.target.value)}
        />

        <Button onClick={() => postComment()}>ADD</Button>
      </InputGroup>
    </div>
  )
}

export default AddComment
