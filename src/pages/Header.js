import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Countdown from 'react-countdown-now'
import { prop } from 'styled-tools'

import background from '../images/background.svg'
import Count from '../components/Count'
import Button from '../components/Button'

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
  top: 25%;
  left: 60%;
`

const Head = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Name = styled.div`
  h1 {
    font-family: ${prop('theme.typographies.muli')};
    font-weight: 200;
    font-size: 45px;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  h2 {
    font-family: ${prop('theme.typographies.oswald')};
    font-weight: 500;
    font-size: 50px;
    text-transform: uppercase;
    letter-spacing: 6px;
  }
`

const Day = styled.div`
  margin-right: 40px;

  h4 {
    font-weight: 500;
    font-size: 55px;
    line-height: 60px;
  }

  hr {
    background-color: ${prop('theme.palette.black')};
    width: 55px;
    border: none;
    height: 4px;
  }
`

const Header = ({ title }) => {
  const date = new Date('2019-09-14T09:00:00').valueOf()

  return (
    <Container>
      <Content>
        <Head>
          <Day>
            <h4>14</h4>
            <hr />
            <h4>09</h4>
          </Day>
          <Name>
            <h1>Front In</h1>
            <h2>Maringá</h2>
          </Name>
        </Head>

        <Button href="https://forms.gle/ERrq8RKcDJGGSmS2A" target="_blank">
          Inscrição Call4papers
        </Button>

        <Countdown renderer={Count} date={date} />
      </Content>
    </Container>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
