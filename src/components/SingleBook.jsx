import React, { Component } from "react"
import { Card } from "react-bootstrap"

class SingleBook extends Component {
  state = { selected: false }

  toggleSelected() {
    // this.setState({
    //   selected: !this.state.selected,
    // })

    if (!this.state.selected) {
      this.props.setAsin(this.props.book.asin)
    }

    this.setState((prevSate) => ({
      selected: !prevSate.selected,
    }))
  }
  render() {
    return (
      <Card
        style={{ width: "18rem" }}
        className={this.state.selected ? "bg-warning" : ""}
      >
        <Card.Img
          variant="top"
          src={this.props.book.img}
          onClick={() => this.toggleSelected()}
        />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
        </Card.Body>
      </Card>
    )
  }
}

export default SingleBook
