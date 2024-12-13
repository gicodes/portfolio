"use client"

import { LeaveContactInfo, SendInstantEmail } from './forms';
import { Box, Grid2, Stack } from '@mui/material';
import ShowAlert, { AlertProps } from './alert';
import { useState, useEffect } from 'react';

const Contact = () => {
  const [alert, setAlert] = useState<AlertProps | null>(null);

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => setAlert(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [alert]);
  
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact/save-my-info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formJson),
      });

      if (response.ok) {
        setAlert({ text: "Info saved! I will be in touch shortly", variant: "success" });
      } else {
        setAlert({ text:'Error saving your contact info', variant:'error' });
      }
    } catch (error) {
      console.error('Error sending feedback:', error);
      setAlert({ text: "Failed to process your contact info", variant: "error" });
    }
  }

  async function handleSendEmail(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact/send-e-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formJson),
      });
      
      if (response.ok) {
        setAlert({ text: 'Email sent successfully!', variant:'success' });
      } else {
        setAlert({ text: 'Error sending email', variant:'error' });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setAlert({ text: "Failed to construct email. Please try again later", variant: "error" });
    }
  }    

  return (
    <Box p={2}>
      {alert && <ShowAlert text={alert.text} variant={alert.variant} />}
      
      <Stack p={1} className="text-center text-gray">
        <h2>Let's Connect</h2>
        <p>Leave your contact information so I can reach you, Or ping me via a dynamic mailing form</p>
      </Stack>
      <Grid2 
        gap={2}
        display={{ lg: 'flex'}} 
        justifyContent={"space-between"} 
      >
        <LeaveContactInfo handleSubmit={handleSubmit} />
        <SendInstantEmail handleSendEmail={handleSendEmail} />
      </Grid2>
    </Box>
  );
};

export default Contact;
