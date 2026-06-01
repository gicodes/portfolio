import { GetToKnowMe } from './overview-action';
import { Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import IndexImage from './index-image';

export const Overview = () => {
  return (
    <Paper 
      elevation={4}
      sx={{
        backgroundColor: 'var(--background)',
        color: 'var(--text-primary)',
        overflow: 'hidden',
        mt: 5,
      }}
    >
      <Box 
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        minWidth={'fit-content'}
        marginTop={{ lg: 5 }}
        padding={{ 
          xs: 1, 
          sm: 1, 
          lg: 3 
        }} 
        display={{ 
          xs: 'grid', 
          sm: 'grid', 
          lg: 'flex' 
        }} 
        justifyContent={{ 
          xs: 'center', 
          sm: 'center', 
          lg: 'space-between' 
        }}   
        gap={{ xs: 4, lg: 6 }}
      >
        <GetToKnowMe />  
        <IndexImage />      
      </Box>
    </Paper>
  );
};
