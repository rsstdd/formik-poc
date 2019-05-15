import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {StaticQuery, graphql} from 'gatsby'

import Header from '../header'
import '../../styles/main.scss'

const Layout = ({children}) => (
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
      <Fragment>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="section is-fullheight">
          <main className="main-body container">{children}</main>
          <footer>
            © {new Date().getFullYear()}
            {` `}
          </footer>
        </div>
      </Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
