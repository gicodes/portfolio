'use client'

import { Box, Button, FormLabel, Paper, Typography } from '@mui/material';
import ShowAlert, { AlertProps } from '@/app/_alerts/alert';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Page = () => {
  const [alert, setAlert] = useState<AlertProps | null>(null);
  const router = useRouter();

  const handleMobileAppCheckout = () => {
    setAlert({ variant: 'info', text: "Oops, I'm currently working on a project. Kindly schedule for later by mail or whatsapp." });
    setTimeout(() => {
      router.push('/connect#email-me');
      setAlert(null);
    }, 7500);
  }

  return (
    <Paper sx={{ p: 4, maxWidth: 800, mx: "auto" }} elevation={3}>
      {alert && <ShowAlert {...alert} />}

      <Typography variant="h6">Mobile Application</Typography>
      <Typography variant="caption" display="block" gutterBottom>
        Setup your project with practicality and pricing in mind
      </Typography>

      <Box 
        sx={{ 
          my: 2,
          p: {xs: 2, sm: 3}, 
          bgcolor: 'rgba(0,0,0,0.1)' 
        }} /* Base Setup */
      >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 2 }}>
        <FormLabel component="legend">Select Platform</FormLabel>
        <Typography variant="caption" mb={1} color="textSecondary">💼 &nbsp;Dart, Flutter | JS, React Native</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <input
              type="radio"
              id="android"
              name="platform"
              value="android"
              onChange={() => setAlert({ variant: 'success', text: 'Android selected' })}
            />
            <label htmlFor="android" style={{ fontSize: 'small' }}>Android</label>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <input
              type="radio"
              id="ios"
              name="platform"
              value="ios"
              onChange={() => setAlert({ variant: 'success', text: 'iOS selected' })}
            />
            <label htmlFor="ios" style={{ fontSize: 'small' }}>iOS</label>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <input
              type="radio"
              id="cross-platform"
              name="platform"
              value="cross-platform"
              onChange={() => setAlert({ variant: 'success', text: 'Android and iOS platforms selected' })}
            />
            <label htmlFor="ios" style={{ fontSize: 'small' }}>Cross Platform</label>
          </Box>
        </Box>
      </Box>
      
      <Box display={'flex'} justifyContent={'flex-end'}>
        <Button sx={{ textTransform: 'none'}} onClick={handleMobileAppCheckout}> Continue</Button>
      </Box>
    </Paper>
  )
}

export default Page
