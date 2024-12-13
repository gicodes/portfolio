import { CloseSharp, DarkModeSharp, LightModeSharp } from '@mui/icons-material';
import { Box, Stack, Drawer, IconButton, Grid2 } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
import { navLinks } from './nav-links';
import { useState } from 'react';

interface NavBarProps {
  toggleTheme: () => void
  theme: "light" | "dark";
}

const Header: React.FC<NavBarProps> = ({
  toggleTheme,
  theme
}) => {
  const smallScreen = useMediaQuery('(max-width: 600px)');

  const [ open, setOpen ] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <nav className='w-100'>
      <Box
        p={2}
        display={'flex'}
        justifyContent={'space-between'}
      >
        { smallScreen ? ( // mobile view
          <Box position={'static'}>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleOpen}
            > 
              <MenuIcon fontSize='large' />
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
                display={'flex'} 
                onClick={handleClose} 
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
          ) : ( // larger screen view
          <Box px={3}>
            <Stack
              direction='row'
              spacing={10}
              padding={2}
            >
              { navLinks.map((item, index) => 
                <a key={index} href={item.href}>{item.name}</a>
              )}
            </Stack>
          </Box>
        )}

        <Box // theme button: default is dark mode
        >
          <Stack
            p={1}
            onClick={toggleTheme}
          >
            {theme === "dark" ? <LightModeSharp/> : <DarkModeSharp />}
          </Stack>
        </Box>
      </Box>
    </nav>
  )
}

export default Header