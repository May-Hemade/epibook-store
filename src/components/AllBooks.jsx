import React, { Component } from "react"
import { Col, FormControl, InputGroup } from "react-bootstrap"
import { Row } from "react-bootstrap"
import { Container } from "react-bootstrap"

import SingleBook from "./SingleBook"

class AllBooks extends Component {
  constructor(props) {
    super(props)
    this.state = { query: "" }
  }
  updateInputValue(event) {
    const newQuery = event.target.value

    this.setState({
      query: newQuery,
    })
  }

  render() {
    return (
      <div>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-sm">search</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="search"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(event) => this.updateInputValue(event)}
          />
        </InputGroup>
        <Container>
          <Row>
            {this.props.books
              .filter((book) => {
                return book.title
                  .toLowerCase()
                  .includes(this.state.query.toLowerCase())
              })
              .map((book) => (
                <Col key={book.asin}>
                  <SingleBook book={book}></SingleBook>
                </Col>
              ))}
          </Row>
        </Container>
      </div>
    )
  }
}

export default AllBooks

// .filter((book) => {
//   return book.title.toLowerCase().includes("sec".toLowerCase())
// })

// getBooks() {
//   if (this.state.query) {
//     console.log("hey")
//     return this.props.books.filter((book) => {
//       return book.title.toLowerCase().includes("sec".toLowerCase())
//     })
//   } else {
//     return this.props.books
//   }
// }
