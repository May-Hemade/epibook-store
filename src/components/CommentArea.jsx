import React, { Component } from "react"
import { useEffect } from "react"
import { useState } from "react"
import AddComment from "./AddComment"
import CommentList from "./CommentList"

const CommentArea = (props) => {
  const [comments, setComments] = useState([])

  const getComments = async () => {
    props.setLoading(true)
    try {
      const responese = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${props.asin}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzE5YjkwZmEyM2M4MzAwMTUzNjhmMjkiLCJpYXQiOjE2NjI2MzAxNjAsImV4cCI6MTY2MzgzOTc2MH0.6MP3FosMk2dFLz2iISr9FtSNa_eEt4btSsOnpo8dUk4",
          },
        }
      )
      props.setLoading(false)
      if (responese.ok) {
        let comments = await responese.json()
        setComments(comments)

        console.log(comments)
      } else {
        console.log("Didn't fetch")
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    console.log("componentDidUpdate")
    getComments()
  }, [props.asin])

  return (
    <div>
      <AddComment asin={props.asin} refreshComments={getComments}></AddComment>
      <CommentList comments={comments}></CommentList>
    </div>
  )
}

export default CommentArea
