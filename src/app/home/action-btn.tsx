import { CodeSharp } from '@mui/icons-material';
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
        className='beat-fade' 
        sx={{ 
          width: {xs: '100%', sm: '100%', lg: '25%'},
        }}
      > 
        <CodeSharp className='text-warning' />
        &nbsp; Hire Me 
      </Button> 
    </Box>
           
  )
}

export default ActionButton