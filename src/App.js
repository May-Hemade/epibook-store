import logo from "./logo.svg"
import React, { Component } from "react"
import "./App.css"
import MyNavBar from "./components/MyNavBar"
import MyFooter from "./components/MyFooter"
import Welcome from "./components/Welcome"
import AllBooks from "./components/AllBooks"
import MyAlert from "./components/MyAlert"

import books from "./data/romance.json"
import Loading from "./components/Loading"
import { Col, Container, Row, Spinner } from "react-bootstrap"
import CommentArea from "./components/CommentArea"

export class App extends Component {
  state = { loading: false, error: false, selectedAsin: undefined }

  setAsin = (asin) => {
    this.setState({
      ...this.state,
      selectedAsin: asin,
    })
  }

  loadingOn = () => {
    this.setState({
      ...this.state,
      loading: true,
    })
  }

  loadingOff = () => {
    this.setState({ ...this.state, loading: false })
  }

  errorOn = () => {
    this.setState({ error: true })
  }

  errorOff = () => {
    this.setState({ error: false })
  }

  render() {
    return (
      <div className="App">
        {this.state.loading && <Loading />}

        <MyAlert variant="warning" text="warning"></MyAlert>
        <MyNavBar></MyNavBar>
        <Welcome
          title="EpiShop Open Now"
          description="Hello to our land of books where reading is Epic"
        ></Welcome>

        <Container>
          <Row>
            <Col md={8}>
              <AllBooks
                books={books}
                loadingOn={this.loadingOn}
                loadingOff={this.loadingOff}
                setAsin={this.setAsin}
              ></AllBooks>
            </Col>
            <Col>
              {this.state.selectedAsin && (
                <CommentArea
                  asin={this.state.selectedAsin}
                  loadingOn={this.loadingOn}
                  loadingOff={this.loadingOff}
                ></CommentArea>
              )}
            </Col>
          </Row>
        </Container>
        <MyFooter></MyFooter>
      </div>
    )
  }
}

export default App
