import React from 'react'
import styled from 'styled-components'
import { theme } from 'styled-tools'

import Button from '../components/Button'

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${theme('colors.black')};
  padding: 80px 0;
  display: flex;
  flex-direction: column;

  h2 {
    font-family: ${theme('typographies.oswald')};
    font-size: 30px;
    line-height: 40px;
    text-transform: uppercase;
    color: ${theme('colors.white')};
    text-align: center;
    max-width: 290px;
    margin: 0 auto;
  }

  p {
    margin: 40px auto 90px auto;
    max-width: 700px;
    text-align: center;
    font-family: ${theme('typographies.muli')};
    color: ${theme('colors.white')};
    line-height: 20px;
    letter-spacing: 2px;
  }
`

export default function Ticket() {
  return (
    <Container>
      <h2>Eai, vamos falar mais sobre frontend?</h2>

      <p>
        O evento visa abordar assuntos variados do ecossistema frontend, UX e UI
        e tecnologias periféricas. Dentre o cronograma, estará presente diversos
        palestrantes referências convidados e também via call4papers. Contamos
        com a sua participação para gerarmos conhecimento e muito networking no
        maior evento frontend do Paraná!
      </p>

      <Button
        href="https://forms.gle/ERrq8RKcDJGGSmS2A"
        variant="secondary"
        target="_blank"
      >
        Inscrição Call4papers
      </Button>
    </Container>
  )
}
