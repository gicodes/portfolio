import { Box, Button, Typography } from '@mui/material';

const ActionButton = () => {
  return (
    <Box 
      p={2} 
      display={'flex'} 
      justifyContent={'center'}
    >
      <Button 
        variant='contained'
        href='/connect' 
        sx={{ 
          bgcolor: 'darkslategrey',
          width: {xs: '100%', sm: '100%', lg: '25%'},
        }}
      > 
        <Typography>Hire Me</Typography>
      </Button> 
    </Box>          
  )
}

export default ActionButton;
