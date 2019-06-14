import React from 'react'
import styled from 'styled-components'
import { theme } from 'styled-tools'

import veltec from '../images/veltec.png'
import devparana from '../images/devparana.png'

const Container = styled.div`
  width: 100%;
  height: 100%
  background-color: ${theme('colors.white')};
  padding: 80px 50px;
  display: flex;
  flex-direction: column;
  text-align: center;

  h2 {
    font-family: ${theme('typographies.oswald')};
    font-size: 30px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: ${theme('colors.black')};
    text-align: center;
    max-width: 290px;
    margin: 0 auto;
  }

  h3 {
    font-family: ${theme('typographies.oswald')};
    font-size: 22px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: ${theme('colors.black')};
    margin-top: 50px;
    margin-bottom: 30px;
  }
`

export default function Sponsors() {
  return (
    <Container>
      <h2>Estão ajudando o evento a acontecer</h2>

      <h3>Patrocinadores</h3>
      <a
        href="https://veltec.com.br/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={veltec} alt="Veltec" />
      </a>

      <h3>Apoiadores</h3>
      <a
        href="https://devparana.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={devparana} alt="Devparaná" />
      </a>
    </Container>
  )
}
