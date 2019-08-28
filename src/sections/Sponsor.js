import React from 'react'
import styled, { css } from 'styled-components'
import { prop, ifProp } from 'styled-tools'

const Container = styled.li`
  ${ifProp(
    { hasPadding: true },
    css`
      padding: 0 35px;
    `
  )}

  img {
    width: 100%;
    max-width: ${prop('size')}px;
    display: block;
    margin: 0 auto;
  }
`

export default function Sponsor({
  image,
  description,
  address,
  hasPadding = false,
  size = 280
}) {
  return (
    <Container size={size} hasPadding={hasPadding}>
      <a href={address} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={description} />
      </a>
    </Container>
  )
}
