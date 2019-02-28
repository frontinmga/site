import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'

import background from '../images/background.svg'

const Container = styled.header`
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`

const Content = styled.div`
  position: absolute;
  top: 30%;
  left: 60%;
`

const Head = styled.div`
  display: flex;
  align-items: center;
`

const Name = styled.div`
  h1 {
    font-family: Muli, sans-serif;
    font-weight: 200;
    font-size: 39px;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  h2 {
    font-family: Oswald, sans-serif;
    font-weight: 500;
    font-size: 41px;
    text-transform: uppercase;
    letter-spacing: 6px;
  }
`

const Date = styled.div`
  margin-right: 40px;

  h4 {
    font-family: Oswald, sans-serif;
    font-weight: 500;
    font-size: 40px;
    line-height: 53px;
  }

  hr {
    background: #000;
    width: 40px;
    border: none;
    height: 4px;
  }
`

const Header = ({ title }) => (
  <Container>
    <Content>
      <Head>
        <Date>
          <h4>22</h4>
          <hr />
          <h4>07</h4>
        </Date>
        <Name>
          <h1>Front In</h1>
          <h2>Maringá</h2>
        </Name>
      </Head>
    </Content>
  </Container>
)

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
