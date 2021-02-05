import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Paper } from "@material-ui/core"

import TopBar from "../components/topBar"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Paper className="paper-body" >
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Paper>

    </Layout>
)

export default SecondPage
