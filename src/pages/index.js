import React from 'react'
import { ThemeProvider } from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { theme } from '../components/Theme'

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <SEO
        title="Home"
        keywords={[
          'frontend',
          'front-end',
          'evento de frontend em maringá',
          'frontinmga'
        ]}
      />
    </Layout>
  </ThemeProvider>
)

export default IndexPage
