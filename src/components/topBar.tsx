
import React, {useState} from 'react'
import { AppBar, Toolbar, Typography } from "@material-ui/core"
import { IconButton } from "@material-ui/core"
import { Button, Drawer, Link, Grid, Divider } from "@material-ui/core"
import { Menu } from "@material-ui/icons"


const TopBar = () => {
    const [open, setOpen] = useState(false);




    return (
      <div>
        <AppBar position="static" style={{backgroundColor: "#4C86A8"}}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => {setOpen(true)}}>
              <Menu />
            </IconButton>
            <Typography variant="h6" className="nav-link"><Link href="/" className="nav-link">Home</Link></Typography>
          </Toolbar>
        </AppBar>

        <Drawer anchor="left" open={open} onClose={() => {setOpen(false)}}>
      <Typography variant="h5" style={{ marginLeft: "1rem"}}>Nav Drawer</Typography>
      <Divider style={{marginBottom: "2rem"}}/>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <Typography variant="h6"><Link href="/">Home</Link></Typography>
        </Grid>
        <Grid item xs={12}>
        <Typography variant="h6"><Link href="/page-2">Page Two</Link></Typography>
        </Grid>
      </Grid>
    </Drawer>
      </div>
    )
  }
  
  export default TopBar;