import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../sections/Header'
import Sponsors from '../sections/Sponsors'
import Schedule from '../sections/Schedule'
import C4P from '../sections/C4P'

import { Reset } from './Reset'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Reset />
        <Header title={data.site.siteMetadata.title} />
        <Schedule />
        <Sponsors />
        <C4P />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
