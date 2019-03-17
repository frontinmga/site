import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Countdown from 'react-countdown-now'
import { prop } from 'styled-tools'

import background from '../images/background.svg'
import Count from '../components/Count'

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
  display: flex;
  align-items: center;
`

const Name = styled.div`
  h1 {
    font-family: ${prop('theme.typographies.muli')};
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

const Day = styled.div`
  margin-right: 40px;

  h4 {
    font-weight: 500;
    font-size: 40px;
    line-height: 53px;
  }

  hr {
    background-color: ${prop('theme.palette.black')};
    width: 40px;
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

        <Countdown renderer={Count} date={date} />
      </Content>
    </Container>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
