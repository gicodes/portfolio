import { GetToKnowMe } from './overview-action';
import { Box, Paper } from '@mui/material';
import IndexImage from './index-image';

export const Overview = () => {
  return (
    <Paper elevation={4}
      sx={{
        backgroundColor: 'var(--background)',
        color: 'var(--text-primary)',
      }}
    >
      <Box 
        minWidth={'fit-content'}
        marginTop={{lg: 5}}
        padding={{xs: 1, sm: 1,lg: 3}} 
        display={{sx: 'grid', sm: 'grid', lg: 'flex'}} 
        justifyContent={{sx: 'center', sm: 'center', lg: 'space-between'}}   
      >
        <GetToKnowMe />  
        <IndexImage />      
      </Box>
    </Paper>
  )
}