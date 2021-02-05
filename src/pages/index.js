import React from "react"
import { Link } from "gatsby"

import { AppBar, Toolbar, Typography } from "@material-ui/core"
import { IconButton } from "@material-ui/core"
import { Button, Paper } from "@material-ui/core"
import { Menu } from "@material-ui/icons"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import TopBar from "../components/topBar"
import BottomBar from "../components/bottomBar"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Paper className="paper-body">
    <h1>Hi Visitor</h1>
    <p>Welcome to my site</p>
    <p>This page is built in React and Gatsby, its a pretty great combo!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Paper>
    </Layout>
)

export default IndexPage
