import React, { Component } from "react"

import { Jumbotron, Button } from "react-bootstrap"

export default class Welcome extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>{this.props.title}</h1>
          <p>{this.props.description}</p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
      </div>
    )
  }
}
