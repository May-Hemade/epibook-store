import React from "react"

import { Jumbotron, Button } from "react-bootstrap"

const Welcome = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
    </div>
  )
}
export default Welcome
