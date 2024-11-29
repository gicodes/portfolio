import { Box, Button, Paper, Badge } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { CodeSharp } from '@mui/icons-material';
import { GetToKnowMe } from './gtkm'
import Image from 'next/image'

export const Overview = () => {
  const smallScreen = useMediaQuery('(max-width: 768px)');

  return (
    <Paper elevation={4}
      sx={{
        backgroundColor: 'var(--background)',
        color: 'var(--text-primary)',
      }}
    >
      <Box 
        minWidth={'fit-content'}
        padding={{xs: 1, sm: 1,lg: 3}} 
        display={smallScreen ? 'grid' : 'flex'} 
        justifyContent={smallScreen ? 'center' : 'space-between'}   
      >
        <GetToKnowMe />
        <Box 
          margin={'auto'} 
          alignItems={'center'}
        >
          <Image priority
            alt='my hero'  
            src='/IMG_0385.jpeg' 
            width={smallScreen ? 350 : 400} 
            height={smallScreen ? 262 : 300}
          />
        </Box>        
      </Box>
      
      <Box 
        py={2}
        px={{ xs: 3, sm: 4, lg: 5}}
      >
        <Badge className='beat-fade v-center' badgeContent={'🆘'}>
          <CodeSharp className='text-gray' fontSize='small' />
        </Badge> &nbsp; &nbsp;
        <Button variant='contained' color='warning'> Hire Me </Button>
      </Box>
    </Paper>
  )
}