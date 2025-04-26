import useMediaQuery from '@mui/material/useMediaQuery';
import { Card, Box } from '@mui/material'
import Image from 'next/image'

const IndexImage = () => {
  const smallScreen = useMediaQuery('(max-width: 600px)');
  
  return (
    <Card 
      sx={{ 
        p: 0,
        m: 'auto',
        width: '100%',  
        maxWidth: 'fit-content'
      }}
    >
      <Box
        display={'flex'} 
        justifyContent={'center'}
      >
        <Image 
          priority
          alt='my hero'  
          src='/IMG_0385.jpeg' 
          objectFit='contain'
          width={smallScreen ? 340 : 504} 
          height={smallScreen ? 262 : 378}
        />
      </Box>
    </Card>
  )
}

export default IndexImage;
