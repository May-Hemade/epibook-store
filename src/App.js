import React, { useState } from "react"
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
const App = () => {
  const [loading, setLoading] = useState(false)
  const [error, seterror] = useState(false)
  const [selectedAsin, setSelectedAsin] = useState(undefined)

  //  const loadingOff = () => {
  //     setLoading(false)
  //   }

  return (
    <div className="App">
      {loading && <Loading />}

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
              setLoading={setLoading}
              setAsin={setSelectedAsin}
            ></AllBooks>
          </Col>
          <Col>
            {selectedAsin && (
              <CommentArea
                asin={selectedAsin}
                setLoading={setLoading}
              ></CommentArea>
            )}
          </Col>
        </Row>
      </Container>
      <MyFooter></MyFooter>
    </div>
  )
}

export default App
