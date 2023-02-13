import * as React from 'react';
import SocialBar from './social-bar mobile'
import VertIcon from '@mui/icons-material/MoreVert';
import { AppBar, Box, Drawer, IconButton, Toolbar } from "@mui/material";


const SocialHeader = () => {

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);


  const styles = {
    background: '#282c30',
  }

  const Bar = () => {
    return (
      <Box className='container is-fluid' style={styles}>
        <div className='sp-fonts mt-6'>
          <button
            className='delete button is-dark'
            onClick={handleClose}
          />
          <SocialBar />
        </div>
      </Box>
    )
  }

  return (
    <AppBar
      position="static"
      style={styles}
    >
      <Toolbar>
        <IconButton
          edge="end"
          size="large"
          color="inherit"
          aria-label="social"
          aria-haspopup="true"
          onClick={handleOpen}
        >
          <VertIcon />
        </IconButton>
        <Drawer
          open={open}
          style={styles}
          aria-label="social-bar"
        >
          <Bar />

        </Drawer>
      </Toolbar>
    </AppBar>

  )
}


export default SocialHeader;