import React from 'react'
import styled from 'styled-components'
import { theme } from 'styled-tools'

import Sponsor from './Sponsor'

import veltec from '../images/veltec.svg'
import somar from '../images/somar.svg'
import hbsis from '../images/hbsis.svg'
import serrabits from '../images/serrabits.svg'
import tecnospeed from '../images/tecnospeed.svg'

import devparana from '../images/devparana.svg'
import frontendbr from '../images/frontendbr.svg'
import femug from '../images/femug.svg'
import sebrae from '../images/sebrae.svg'

const Container = styled.div`
  width: 100%;
  height: 100%
  background-color: ${theme('colors.white')};
  padding: 80px 50px;
  display: flex;
  flex-direction: column;
  text-align: center;

  h2 {
    font-family: ${theme('font.family.oswald')};
    font-size: 30px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: ${theme('colors.black')};
    text-align: center;
    max-width: 330px;
    margin: 0 auto;
  }

  h3 {
    font-family: ${theme('font.family.oswald')};
    font-size: 22px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: ${theme('colors.black')};
    margin-top: 50px;
    margin-bottom: 30px;
  }

  .partners {
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }
`

const Group = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 30px 0;
`

export default function Sponsors() {
  return (
    <Container>
      <h2>Estão ajudando o evento a acontecer</h2>

      <h3>Patrocinadores</h3>

      <ul>
        <Group>
          <Sponsor
            size={280}
            image={veltec}
            description="Veltec"
            address="https://veltec.com.br"
          />
        </Group>

        <Group>
          <Sponsor
            size={200}
            image={somar}
            description="Somar Meteorologia"
            address="http://somarmeteorologia.com.br"
          />

          <Sponsor
            size={200}
            image={hbsis}
            description="HBSIS"
            address="https://hbsis.com.br"
          />
        </Group>

        <Group>
          <Sponsor
            size={180}
            image={tecnospeed}
            description="Tecnospeed"
            address="https://tecnospeed.com.br"
          />

          <Sponsor
            size={180}
            image={serrabits}
            description="Tecnospeed"
            address="https://serrabits.com.br"
          />
        </Group>
      </ul>

      <h3>Apoiadores</h3>

      <div className="partners">
        <ul>
          <Group>
            <Sponsor
              size={100}
              hasPadding={true}
              image={devparana}
              description="Devparaná"
              address="https://devparana.org"
            />

            <Sponsor
              size={200}
              hasPadding={true}
              image={frontendbr}
              description="Front-End BR"
              address="https://frontendbr.com.br"
            />

            <Sponsor
              size={100}
              hasPadding={true}
              image={femug}
              description="FEMUG Maringá"
              address="https://www.meetup.com/pt-BR/femugmga"
            />

            <Sponsor
              size={170}
              hasPadding={true}
              image={sebrae}
              description="SEBRAE Maringá"
              address="https://www.sebraepr.com.br"
            />
          </Group>
        </ul>
      </div>
    </Container>
  )
}
