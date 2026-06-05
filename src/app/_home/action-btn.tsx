import { Box, Button, ButtonGroup, Typography } from '@mui/material';

const ActionButton = () => {
  return (
    <Box 
      my={10} 
      display={'flex'} 
      justifyContent={'center'} 
      alignItems={'center'} 
    >
      <ButtonGroup>
        <Button 
          variant='contained'
          href='/connect' 
          sx={{ 
            bgcolor: 'darkslategrey',
            borderRadius: '99px',
            height: '50px',
            '&:hover': {
              bgcolor: 'slategrey',
              transform: 'scale(1.05)',
              transition: 'transform 0.3s ease-in-out',
            }
          }}
        > 
          <Typography fontWeight={700}>Hire Me</Typography>
        </Button> 
        <Button 
          variant='contained'
          href='/app-builder' 
          sx={{ 
            borderRadius: '99px',
            height: '50px',
            '&:hover': {
              bgcolor: 'slategrey',
              transform: 'scale(1.05)',
              transition: 'transform 0.3s ease-in-out',
            }
          }}
        > 
          Get Estimate with App-builder
        </Button>
      </ButtonGroup>
    </Box>          
  )
}

export default ActionButton;
