import React from "react"
import { AppBar, Toolbar, Typography } from "@material-ui/core"
import { IconButton } from "@material-ui/core"
import { Button } from "@material-ui/core"
import { Menu } from "@material-ui/icons"

function home() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Menu />
          </IconButton>
          <Typography variant="h6">News</Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <h1>Hello World</h1>
    </div>
  )
}

export default home
