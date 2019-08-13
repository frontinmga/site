import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Countdown from 'react-countdown-now'
import media from 'styled-media-query'

import { prop } from 'styled-tools'
import {
  faTwitter,
  faFacebookF,
  faGithubAlt
} from '@fortawesome/free-brands-svg-icons'

import background from '../images/background.svg'
import Count from '../components/Count'
import Button from '../components/Button'
import Icon from '../components/Icon'

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

const Footer = styled.div`
  max-width: 200px;
  width: 100%;
  margin: 0 auto;
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-around;
  align-items: center;
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
    font-family: ${prop('theme.font.family.oswald')};
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
    background-color: ${prop('theme.colors.black')};
    width: 55px;
    border: none;
    height: 4px;
  }
`

export default function Header({ title }) {
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

        <Button
          variant="primary"
          size="default"
          target="_blank"
          href="https://www.sympla.com.br/front-in-maringa-2019__554907"
        >
          Garantir ingresso
        </Button>

        <Countdown renderer={Count} date={date} />
      </Content>

      <Footer>
        <Icon icon={faTwitter} url="https://twitter.com/frontinmga" title="Siga-nos no twitter" />
        <Icon icon={faFacebookF} url="https://facebook.com/frontinmga" title="Nos acompanhe no facebook" />
        <Icon icon={faGithubAlt} url="https://github.com/frontinmga" title="Confira nosso github" />
      </Footer>
    </Container>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}
