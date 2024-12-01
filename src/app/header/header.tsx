import { Badge, Box, Stack, Drawer, IconButton, Grid2 } from '@mui/material';
import { CloseSharp, DarkModeSharp, LightModeSharp } from '@mui/icons-material';
import useMediaQuery from '@mui/material/useMediaQuery';
import VertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import { navLinks } from './nav-links';

interface NavBarProps {
  toggleTheme: () => void
  theme: "light" | "dark";
}

const Header: React.FC<NavBarProps> = ({
  toggleTheme,
  theme
}) => {
  const smallScreen = useMediaQuery('(max-width: 600px)');

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <nav className='w-100'>
      <Box
        p={2}
        display={'flex'}
        justifyContent={'space-between'}
      >
        { smallScreen ? (
          <Box position={'static'}>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleOpen}
            > 
              <VertIcon />
            </IconButton>

            <Drawer 
              open={open}
              sx={{
                '& .MuiDrawer-paper': {
                  backgroundColor: 'var(--background)',
                  color: 'var(--text-primary)',
                },
              }}
              >
              <Grid2
                my={2}
                px={2}
                onClick={handleClose} 
                display={'flex'} 
                justifyContent={'flex-end'}
                >
                <CloseSharp className='close-btn' />
              </Grid2>
              <Box p={8}>
                <Stack spacing={4}>
                  { navLinks.map((item, index) => 
                    <a key={index} href={item.href}><b>{item.name}</b></a>
                  )}
                </Stack>
              </Box>
            </Drawer>
          </Box>
          ) : (
          <Stack
            padding={2}
            direction='row'
            spacing={10}
          >
            { navLinks.map((item, index) => 
              <a key={index} href={item.href}>{item.name}</a>
            )}
          </Stack>
        )}

        <Stack
          p={1}
          onClick={toggleTheme}
        >
          {theme === "dark" ? <LightModeSharp/> : <DarkModeSharp />}
        </Stack>
      </Box>
    </nav>
  )
}

export default Header