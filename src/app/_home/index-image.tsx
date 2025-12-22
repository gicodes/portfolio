import useMediaQuery from '@mui/material/useMediaQuery';
import { Card, Box } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';

const IndexImage = () => {
  const smallScreen = useMediaQuery('(max-width: 600px)');

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, x: 50 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.4 }}
      whileHover={{ scale: 1.05, y: -10 }}
      style={{ originX: 0.5, originY: 0.5 }}
    >
      <Card 
        sx={{ 
          p: 0,
          m: 'auto',
          width: '100%',  
          maxWidth: 'fit-content',
          boxShadow: 6,
          borderRadius: 4,
          overflow: 'hidden',
        }}
      >
        <Box display={'flex'} justifyContent={'center'}>
          <Image 
            priority
            alt='Senior Frontend Engineer - Stylized Illustration'
            src="https://img.freepik.com/free-photo/cartoon-man-wearing-glasses_23-2151136784.jpg?semt=ais_hybrid&w=740&q=80"
            width={smallScreen ? 340 : 504} 
            height={smallScreen ? 262 : 378}
            style={{ objectFit: 'cover' }}
          />
        </Box>
      </Card>
    </motion.div>
  );
};

export default IndexImage;