import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { render, ReactDOM } from 'react-dom'
import posed, { PoseGroup } from 'react-pose'
import styled from 'styled-components'

const CircleDiv = styled(
  posed.div({
    attention: {
      backgroundColor: '#f9415d',
      opacity: 1,
      scale: 0.9,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 0
      }
    },
    rest: {
      scale: 1,
      backgroundColor: '#fcab10',
      opacity: 0.6
    }
  })
)`
  background-color: blue;
  ${(props) => `
        height: ${props.size}px;
        width: ${props.size}px;        
  `}
`

class CircleLoader extends Component {
  state = { toggleAnimation: true }
  intervalKey = 0
  delay = 200
  toggleAnimation = () => {
    this.setState({
      toggleAnimation: !this.state.toggleAnimation
    })
  }

  componentDidMount () {
    const { Loading } = this.props
    if (Loading) {
      this.intervalKey = setInterval(this.toggleAnimation, this.delay)
    } else {
      clearInterval(this.intervalKey)
    }
  }

  componentWillReceiveProps (newProps) {
    const { Loading } = newProps
    if (Loading) {
      this.intervalKey = setInterval(this.toggleAnimation, this.delay)
    } else {
      clearInterval(this.intervalKey)
    }
  }

  componentWillUnmount () {
    clearInterval(this.intervalKey)
  }

  render () {
    const { Loading, children } = this.props
    const { toggleAnimation } = this.state
    if (Loading) {
      return (
        <div className="d-flex justify-content-center">
          <CircleDiv
            size="200"
            pose={toggleAnimation ? 'attention' : 'rest'}
            className="rounded-circle"
          >
            {/** <FontAwesomeIcon icon="spinner" size="lg" spin /> */}
          </CircleDiv>
        </div>
      )
    }
    return children
  }
}

export default CircleLoader
