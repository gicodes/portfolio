import { Box, Button } from '@mui/material';

const ActionButton = () => {
  return (
    <Box 
      p={2} 
      display={'flex'} 
      justifyContent={'center'}
    >
      <Button 
        variant='contained'
        href='/contact' 
        sx={{ 
          width: {xs: '100%', sm: '100%', lg: '25%'},
        }}
      > 
        Hire Me
      </Button> 
    </Box>          
  )
}

export default ActionButton;
