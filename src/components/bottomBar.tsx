import React from "react"
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core"
import RestoreIcon from "@material-ui/icons/Restore"
import FavoriteIcon from "@material-ui/icons/Favorite"
import TwitterIcon from '@material-ui/icons/Twitter'

const BottomBar = () => {
  return (
    <BottomNavigation showLabels style={{width: "100%"}}>
      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<TwitterIcon />} />
    </BottomNavigation>
  )
}

export default BottomBar
