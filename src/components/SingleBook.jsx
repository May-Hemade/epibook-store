import React, { Component } from "react"
import { Card } from "react-bootstrap"

class SingleBook extends Component {
  constructor(props) {
    super(props)
    this.state = { selected: false }
  }

  toggleSelected() {
    this.setState({
      selected: !this.state.selected,
    })
  }
  render() {
    return (
      <Card
        style={{ width: "18rem" }}
        onClick={(_event) => this.toggleSelected()}
        className={this.state.selected ? "bg-warning" : ""}
      >
        <Card.Img variant="top" src={this.props.book.img} />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
        </Card.Body>
      </Card>
    )
  }
}

export default SingleBook
