import React, { Component } from "react"
import { useState } from "react"
import { Card } from "react-bootstrap"

const SingleBook = (props) => {
  const [selected, setSelected] = useState(false)

  const toggleSelected = () => {
    if (!selected) {
      props.setAsin(props.book.asin)
    }

    setSelected(!selected)
  }

  return (
    <Card style={{ width: "18rem" }} className={selected ? "bg-warning" : ""}>
      <Card.Img
        variant="top"
        src={props.book.img}
        onClick={() => toggleSelected()}
      />
      <Card.Body>
        <Card.Title>{props.book.title}</Card.Title>
      </Card.Body>
    </Card>
  )
}

export default SingleBook
