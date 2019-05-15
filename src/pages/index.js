import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Form from '../components/form'

const IndexPage = () => (
  <Layout className="content">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Spike</h1>
    <Form />
  </Layout>
)

export default IndexPage
