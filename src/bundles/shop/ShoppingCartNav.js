import React, { Component } from 'react'
import styled from 'styled-components'
import AnimatedNavbar from './AnimatedNavbar'

const AnimatedNavbarContainer = styled.div`
  background: #53f;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  > div:first-of-type {
    flex: 1 0 70vh;
  }
`

export default class ShoppingCartNav extends Component {
  render () {
    return (
      <AnimatedNavbarContainer>
        <AnimatedNavbar
          tweenConfig={{
            ease: 'easeOutExpo',
            duration: 300
          }}
        />
      </AnimatedNavbarContainer>
    )
  }
}
