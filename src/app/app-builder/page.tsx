'use client';

import { ArrowBackIosNewSharp, ArrowForwardIos } from '@mui/icons-material';
import { Box, Button, ButtonGroup, Card, Typography } from '@mui/material';
import React, { useState } from 'react';

const Page = () => {
  const [optionButtons, setOptionButtons] = useState(false);

  const handleOptionButtons = () => setOptionButtons(!optionButtons);
  const Continue = <> Continue &nbsp; <ArrowForwardIos fontSize='small'/> </>
  const back = <> <ArrowBackIosNewSharp fontSize='small'/> &nbsp; Back </>

  return (
    <Box my={2} textAlign={'center'} width={'100%'}>
      { !optionButtons && 
        <Box 
          alignItems={'center'}
          position={'relative'}
          width={'100%'}
          my={5}
        >
          <Box
            sx={{
              backgroundImage: 'url(/builder2.avif)',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              height: '100vh',
              width: '100%',
            }}
          />

          <Card 
            sx={{ 
              width: {xs: '80%', sm: '50%'},
              p: {xs: 2, sm: 4},
              left: '50%', 
              top: '20%', 
              position: 'absolute', 
              transform: 'translate(-50%, -50%)',
            }}
          >
            <Typography sx={{ typography: { xs: 'h3', sm: 'h2', md: 'h1' }, fontWeight: { xs: 501, sm: 501, md: 555} }}>
              Build your Next App
            </Typography>
            <Typography variant={'h6'} mt={2}>
              With <Typography variant='caption' fontSize={22} color='warning.main'>Technology Stack</Typography> that complement your <Typography variant='caption' fontSize={22} color='error.main'>project</Typography>
            </Typography>
          </Card>

          <Box sx={{ bgcolor: 'rgba(255,255,255, 0.5)'}} py={2} px={1}>
            <Typography variant='caption'>
              Choose from a variety of standard, re-usable features and services to customize your app and get a good structure of a real-world project without worrying about budget or time.
            </Typography>
          </Box>
        </Box>
      }

      <Button onClick={handleOptionButtons}> {optionButtons ?  back : Continue} </Button>

      { optionButtons && 
        <Box my={6}>
          <ButtonGroup>
            <Button href='/app-builder/web' variant='contained' color='primary'>
              Web Application
            </Button>
            <Button href='/app-builder/mobile' color='secondary'>
              Mobile Application
            </Button>
          </ButtonGroup>
        </Box>
      }
    </Box>
  )
}

export default Page