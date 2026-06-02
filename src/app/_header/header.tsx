import { CloseSharp, DarkModeSharp, LightModeSharp } from '@mui/icons-material';
import { Box, Stack, Drawer, IconButton, Grid2 } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { navLinks } from './nav-links';
import Link from 'next/link';

interface NavBarProps {
  toggleTheme: () => void
  theme: "light" | "dark";
}

const navLinkStyles = ({
  isActive,
}: {
  isActive: boolean;
}) => ({
  textDecoration: 'none',
  padding: '10px 18px',
  borderRadius: '8px',
  fontWeight: 600,
  transition: 'all 0.2s ease',
  backgroundColor: isActive
    ? 'var(--text-primary)'
    : 'transparent',
  color: isActive
    ? 'var(--background)'
    : 'var(--text-primary)',
});

const Header: React.FC<NavBarProps> = ({
  toggleTheme,
  theme
}) => {
  const [ open, setOpen ] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }

    return pathname.startsWith(href);
  };

  const smallScreen = useMediaQuery('(max-width: 600px)');
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  if (!isMounted) return null;

  return (
    <nav>
      <Box
        py={2}
        zIndex={1000}
        display={'flex'}
        position={'sticky'}
        px={{ xs: 2, sm: 3, lg: 6 }}
        justifyContent={'space-between'}
      >
        { smallScreen ? ( // mobile view
          <Box px={2}>
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
                    <Link
                      key={index} 
                      href={item.href}                    
                      style={navLinkStyles({
                        isActive: isActive(item.href),
                      })}
                    >
                      <b>{item.name}</b>
                    </Link>
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
                <Link
                  key={index} 
                  href={item.href}                
                  style={navLinkStyles({
                    isActive: isActive(item.href),
                  })}
                >
                  <b>{item.name}</b>
                </Link>
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