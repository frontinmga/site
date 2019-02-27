import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'

import background from '../images/background.svg'

const Content = styled.header`
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  h1 {
  }
`

const Header = ({ siteTitle }) => (
  <Content>
    <h1>Front In</h1>
    <h2>Maringá</h2>
  </Content>
)

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired
}

export default Header
