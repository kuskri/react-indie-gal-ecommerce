import { Text } from "@chakra-ui/react"
import React, { Component } from "react"

//NOT IN USE SINCE IT IS A CLASS COMPONENT, USING CTAHOOKS INSTEAD

const textArray = [
  "Free international shipping with orders 85€ and up",
  "Sign up for our newsletter, get 10% off your first order",
]

class CTAUsingClasses extends Component {
  constructor() {
    super()
    this.state = { textIdx: 0 }
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx
      this.setState({ textIdx: currentIdx + 1 })
    }, 3000)
  }

  componentDidUnmount() {
    clearInterval(this.timeout)
  }

  render() {
    let textThatChanges = textArray[this.state.textIdx % textArray.length]

    return (
      <Text
        h={[7, 9, 10]}
        m="auto"
        textAlign="center"
        bgColor="white"
        fontSize={["xs", "sm", "md"]}
        p={2}
      >
        {textThatChanges}
      </Text>
    )
  }
}

export default CTAUsingClasses
