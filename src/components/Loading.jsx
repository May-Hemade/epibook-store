import React from "react"
import { Spinner } from "react-bootstrap"
const Loading = () => {
  return (
    <div>
      <Spinner animation="border" variant="primary" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  )
}

export default Loading
