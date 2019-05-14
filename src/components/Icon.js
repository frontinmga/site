import React from 'react'
import styled from 'styled-components'
import { prop } from 'styled-tools'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

const Container = styled.a`
  background-color: ${prop('theme.palette.black')};
  border-radius: 50%;
  text-transform: uppercase;
  text-align: center;
  width: 35px;
  height: 35px;
  display: block;
  text-decoration: none;
  position: relative;

  &:hover {
    animation: bounce 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  .icon {
    color: ${prop('theme.palette.white')};
    font-size: 18px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const Icon = ({ icon, url }) => (
  <Container href={url} target="_blank">
    <FontAwesomeIcon className="icon" icon={icon} />
  </Container>
)

Icon.propTypes = {
  icon: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired
}

export default Icon
