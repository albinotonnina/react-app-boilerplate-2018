import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

export default class App extends React.Component {
  static propTypes = {
    foo: PropTypes.string.isRequired
  }

  render() {
    return (
      <Container>
        <h1>Hello World 📦 🚀</h1>
      </Container>
    )
  }
}
