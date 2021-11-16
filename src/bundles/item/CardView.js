import React from 'react'
import { render } from 'react-dom'
import posed, { PoseGroup } from 'react-pose'
import styled from 'styled-components'

const configContent = {
  off: {
    opacity: 0
  },
  on: {
    opacity: 1,
    delayChildren: 250,
    staggerChildren: 100
  }
}

const configBox = {
  off: {
    flip: true
  },
  on: {
    flip: true
  }
}

const Box = posed.div(configBox)
const CardViewContainer = posed.div(configContent)

const CardView = function (props) {
  return <Box {...props} className="card-columns">
      <CardViewContainer>{props.children}</CardViewContainer>
    </Box>
}
export default CardView
