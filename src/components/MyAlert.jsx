import React from "react"
import { Alert } from "react-bootstrap"

function MyAlert(props) {
  return <Alert variant={props.variant}>This is a {props.text}</Alert>
}

export default MyAlert
