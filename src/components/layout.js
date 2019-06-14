import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../sections/Header'
import Sponsors from '../sections/Sponsors'
import Ticket from '../sections/Ticket'

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
        <Ticket />
        <Sponsors />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
