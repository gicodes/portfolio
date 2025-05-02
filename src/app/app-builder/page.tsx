'use client';

import { Box, Button, ButtonGroup, Card, Typography } from '@mui/material';
import { ArrowBackIosNewSharp, TouchApp } from '@mui/icons-material';
import React, { useState } from 'react';

const Page = () => {
  const [optionButtons, setOptionButtons] = useState(false);
  const handleOptionButtons = () => setOptionButtons(!optionButtons);

  const Back = () => <Button color='warning'> <ArrowBackIosNewSharp fontSize='small'/> &nbsp; Back </Button>

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
              loading: 'lazy',
              height: '100vh',
              width: '100%',
            }}
          />

          <Card 
            sx={{ 
              width: {xs: '85%', sm: '50.5%'},
              p: {xs: 2, sm: 4},
              position: 'absolute', 
              left: '50%', top: '25%', 
              transform: 'translate(-50%, -50%)',
            }}
          >
            <Typography sx={{ typography: { xs: 'h3', sm: 'h2', md: 'h1' }, fontWeight: { xs: 501, sm: 501, md: 555} }}>
              Build Your Next App
            </Typography>
            <Box my={2}>
              <Typography variant={'h6'} display={'inline'} fontWeight={400}> From Scratch・</Typography>
              <Typography variant='h6' display={'inline'} color='error.main' fontWeight={200}>With the right tools and technology・</Typography>
              <Typography variant={'h6'}  display={'inline'} fontWeight={400}>Lead the Project </Typography>
            </Box>

            <Box display={'flex'} alignItems={'center'}>
              <Button onClick={handleOptionButtons} 
                sx={{ 
                  py: 2,
                  px: { xs: 1.2, sm: 2, md: 3 },
                  width: '100%', 
                  bgcolor: 'whitesmoke',
                  textTransform: 'none', 
                  justifyContent: 'space-between', 
                  '&:hover': {
                    bgcolor: 'wheat',
                    boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
                  },
                }} 
                color='inherit'
              >
                <Typography variant={'caption'} fontWeight={400} color='textSecondary'>
                  Sounds about right..  Let's get started!
                </Typography>
                <TouchApp sx={{ cursor: 'pointer'}} />
              </Button>
            </Box>
          </Card>

          <Box sx={{ bgcolor: 'rgba(255,255,255, 0.5)'}} py={2} px={1}>
            <Typography variant='caption'>
              Choose from a variety of standard, re-usable features and services to customize your app and get a good structure of a finished project with budget friendly setup.
            </Typography>
          </Box>
        </Box>
      } { optionButtons && 
        <Box my={6}>
          <Box my={10} onClick={handleOptionButtons}><Back /></Box>

          <Typography variant='body1' mb={5}> Choose Application Type </Typography>
          <ButtonGroup>
            <Button sx={{ p: 1.5}} href='/app-builder/web' variant='contained' color='success'>
              Web Application
            </Button>
            <Button sx={{ p: 1.5}} href='/app-builder/mobile' variant='contained' color='secondary'>
              Mobile Application
            </Button>
          </ButtonGroup>
        </Box>
      }
    </Box>
  )
}

export default Page