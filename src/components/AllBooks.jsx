import React, { Component, useState } from "react"
import { Col, FormControl, InputGroup } from "react-bootstrap"
import { Row } from "react-bootstrap"
import { Container } from "react-bootstrap"

import SingleBook from "./SingleBook"

const AllBooks = (props) => {
  const [query, setQuery] = useState("")

  const updateInputValue = (event) => {
    const newQuery = event.target.value

    // this.setState({
    //   query: newQuery,
    // })
    setQuery(newQuery)
  }

  return (
    <div>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-sm">search</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="search"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(event) => updateInputValue(event)}
        />
      </InputGroup>
      <Container>
        <Row>
          {props.books
            .filter((book) => {
              return book.title.toLowerCase().includes(query.toLowerCase())
            })
            .map((book) => (
              <Col key={book.asin}>
                <SingleBook
                  book={book}
                  setLoading={props.setLoading}
                  setAsin={props.setAsin}
                ></SingleBook>
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  )
}

export default AllBooks
