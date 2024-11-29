import { Box, Button, Stack, Paper, Badge } from '@mui/material';
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
        margin={'auto'}
        minWidth={'fit-content'}
        padding={smallScreen ? 1 : 3} 
        display={smallScreen ? 'grid' : 'flex'} 
        justifyContent={smallScreen ? 'center' : 'space-between'}   
      >
        <Stack 
          padding={1}
          width={'100%'}
          margin={'auto'}
          height={smallScreen ? '300px' : '250px'}
        >
          <GetToKnowMe />
        </Stack>
        <Box margin={'auto'}>
          <Image priority
            alt='my hero'  
            src='/IMG_0385.jpeg' 
            width={smallScreen ? 350 : 400} 
            height={smallScreen ? 262 : 300}
          />
        </Box>        
      </Box>
      <Box padding={'10px 15px 20px'}>
        <Badge className='beat-fade'>
          <CodeSharp className='text-gray' fontSize='small' />
        </Badge> &nbsp;
        <Button variant='contained' color='warning'> Hire Me </Button>
      </Box>
    </Paper>
  )
}