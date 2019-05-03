import React from 'react'
import styled, { css } from 'styled-components'
import { prop, switchProp } from 'styled-tools'

const Button = styled.a`
  cursor: pointer;
  background-color: ${prop('theme.palette.black')};
  font-family: ${prop('theme.typographies.muli')};
  color: ${prop('theme.palette.white')};
  border-radius: 25px;
  text-transform: uppercase;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  letter-spacing: 2px;
  display: block;
  text-decoration: none;

  ${switchProp('size', {
    large: css`
      width: 100%;
    `
  })}

  &:hover {
    animation: bounce 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`

export default Button
