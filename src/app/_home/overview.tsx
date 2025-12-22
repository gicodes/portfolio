import { GetToKnowMe } from './overview-action';
import IndexImage from './index-image';
import { Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';

export const Overview = () => {
  return (
    <Paper 
      elevation={4}
      sx={{
        backgroundColor: 'var(--background)',
        color: 'var(--text-primary)',
        mt: 5,
        overflow: 'hidden',
      }}
    >
      <Box 
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        minWidth={'fit-content'}
        marginTop={{ lg: 5 }}
        padding={{ xs: 1, sm: 1, lg: 3 }} 
        display={{ xs: 'grid', sm: 'grid', lg: 'flex' }} 
        justifyContent={{
          xs: 'center', sm: 'center', lg: 'space-between'
        }}   
        gap={{ xs: 4, lg: 6 }}
      >
        <GetToKnowMe />  
        <IndexImage />      
      </Box>
    </Paper>
  );
};