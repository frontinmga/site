import React from 'react'
import styled from 'styled-components'
import { prop } from 'styled-tools'

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${prop('theme.colors.white')};
  padding: 0 10px;

  span:first-of-type {
    font-size: 40px;
    font-family: ${prop('theme.typographies.oswald')};
  }

  span {
    font-weight: 100;
    letter-spacing: 1px;
    font-family: ${prop('theme.typographies.muli')};
  }
`

const Container = styled.div`
  text-align: center;
  text-transform: uppercase;
  margin-top: 60px;

  h3 {
    font-size: 45px;
    font-weight: 100;
    font-family: ${prop('theme.typographies.muli')};
    letter-spacing: 2px;
    margin-bottom: 10px;
  }
`

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: ${prop('theme.colors.black')};
`

const Count = ({ days, hours, minutes, seconds }) => {
  return (
    <Container>
      <h3>Edição 2019 em</h3>
      <Content>
        <Box>
          <span>{days}</span>
          <span>Dias</span>
        </Box>
        <Box>
          <span>{hours}</span>
          <span>Horas</span>
        </Box>
        <Box>
          <span>{minutes}</span>
          <span>Minutos</span>
        </Box>
        <Box>
          <span>{seconds}</span>
          <span>Segundos</span>
        </Box>
      </Content>
    </Container>
  )
}

export default Count
