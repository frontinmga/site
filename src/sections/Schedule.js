import React from 'react'
import styled, { css } from 'styled-components'
import { theme, ifProp } from 'styled-tools'

import sibelius from '../images/sibelius.png'
import junior from '../images/junior.png'
import fernanda from '../images/fernanda.png'
import vinicius from '../images/vinicius.png'

import { Box } from '../components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${theme('colors.black')};
  padding: 80px 50px;
  display: flex;
  flex-direction: column;
  text-align: center;

  h2 {
    letter-spacing: 2px;
    font-family: ${theme('font.family.oswald')};
    font-size: 30px;
    line-height: 40px;
    text-transform: uppercase;
    color: ${theme('colors.white')};
    text-align: center;
    max-width: 290px;
    margin: 0 auto;
  }
`

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

const Circle = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${theme('colors.white')};
  border-radius: ${theme('border.radius.fifty')};
  position: relative;
  margin: 0 110px;

  ${ifProp(
    { line: true },
    css`
      &::before {
        content: '';
        position: absolute;
        top: 30px;
        left: 50%;
        width: 1px;
        height: 80px;
        display: block;
        background-color: ${theme('colors.white')};
      }
    `
  )}

  &::after {
    content: '';
    border: 1px solid ${theme('colors.black')};
    width: 22px;
    height: 22px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: ${theme('border.radius.fifty')};
  }
`

const Hour = styled.span`
  width: 20px;
  color: ${theme('colors.white')};
  font-family: ${theme('font.family.oswald')};
  font-weight: ${theme('font.weight.light')};
  font-size: 14px;
`

const Speaker = styled.div`
  display: flex;
  align-items: center;

  .photo {
    width: 80px;
    height: 80px;
    border-radius: ${theme('border.radius.fifty')};
  }
`

const Description = styled.div`
  margin-left: 20px;
  text-align: left;
  color: ${theme('colors.white')};

  p {
    font-family: ${theme('font.family.muli')};
  }

  h3 {
    text-transform: uppercase;
    font-weight: ${theme('font.weight.light')};
    margin-bottom: 5px;
  }
`

const Content = styled(Box)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const Slot = ({
  hour,
  name,
  description,
  image,
  line = true,
  top = 30,
  ...props
}) => (
  <Content {...props} top={top}>
    <Hour>{hour}</Hour>
    <Circle line={line} />
    <Speaker>
      {image && <img className="photo" src={image} alt={name} />}
      <Description>
        <h3>{name}</h3>
        <p>{description}</p>
      </Description>
    </Speaker>
  </Content>
)

export default function Schedule() {
  return (
    <Container>
      <h2>Cronograma do evento</h2>

      <Timeline>
        <Slot hour="09:00" name="Checkin e Coffee Break" />
        <Slot
          hour="10:00"
          name="Junior Conte"
          description="50 tons de frontend"
          image={junior}
        />
        <Slot
          hour="10:30"
          name="Vinícius Felix"
          description="Gráficos, o limiar entre uma mensagem e uma mentira"
          image={vinicius}
        />
        <Slot hour="11:00" name="Apresentação a definir" />
        <Slot hour="12:00" name="Almoço" />
        <Slot
          hour="13:30"
          name="Sibelius"
          description="Practical AST, compilers to tooling"
          image={sibelius}
        />
        <Slot hour="14:30" name="Apresentação a definir" />
        <Slot hour="15:00" name="Apresentação a definir" />
        <Slot hour="15:30" name="Coffee Break" />
        <Slot
          hour="16:00"
          name="Fernanda Bernardo"
          description="O mágico mundo de Houdini"
          image={fernanda}
        />
        <Slot hour="17:00" name="Encerramento" top={50} line={false} />
      </Timeline>
    </Container>
  )
}
