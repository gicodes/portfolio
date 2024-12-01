import useMediaQuery from '@mui/material/useMediaQuery';
import { Card, Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const IndexImage = () => {
  const smallScreen = useMediaQuery('(max-width: 600px)');
  return (
    <Card sx={{ width: '100%', p: 0, maxWidth: 'fit-content'}}>
      <Box display={'flex'} justifyContent={'center'}>
        <Image 
          priority
          alt='my hero'  
          src='/IMG_0385.jpeg' 
          width={smallScreen ? 350 : 400} 
          height={smallScreen ? 262 : 300}
        />
      </Box>
      
    </Card>
  )
}

export default IndexImage
