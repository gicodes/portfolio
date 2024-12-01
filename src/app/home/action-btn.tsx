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
        className='b' 
        sx={{ 
          width: {xs: '100%', sm: '100%', lg: '25%'},
        }}
      > 
        <a href='/contact'>Hire Me</a> 
      </Button> 
    </Box>
           
  )
}

export default ActionButton