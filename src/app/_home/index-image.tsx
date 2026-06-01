import useMediaQuery from '@mui/material/useMediaQuery';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Card, Box } from '@mui/material';
import Image from 'next/image';

import image1 from '../../../public/Gicodes1.jpg';
import image2 from '../../../public/Gicodes3.jpg';
import image3 from '../../../public/Gicodes2.jpeg';
import image4 from '../../../public/Gicodes4.jpg';

const images = [
  { src: image1, alt: 'Senior Full-Stack Engineer [Gideon Chino]' },
  { src: image2, alt: 'Project 2' },
  { src: image3, alt: 'Project 3' },
  { src: image4, alt: 'Project 4' },
];

const IndexImage = () => {
  const smallScreen = useMediaQuery('(max-width: 600px)');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {  // Auto slideshow - 10 seconds per image
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, x: 50 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.4 }}
      whileHover={{ scale: 1.05, y: -10 }}
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
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: smallScreen ? 340 : 504,
            height: smallScreen ? 300 : 500,
            overflow: 'hidden',
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{ position: 'absolute', width: '100%', height: '100%' }}
            >
              <Image
                priority={currentIndex === 0} // Only first image gets priority
                alt={images[currentIndex].alt}
                src={images[currentIndex].src}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 600px) 340px, 504px"
              />
            </motion.div>
          </AnimatePresence>
        </Box>
      </Card>
    </motion.div>
  );
};

export default IndexImage;