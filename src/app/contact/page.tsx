"use client"

import { Box, Grid2, Stack } from '@mui/material';
import { LeaveContactInfo, SendInstantEmail } from './forms';
import Footer from '../footer/footer';

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
    const result = await response.json();
    if (response.ok) {
      alert('Feedback sent successfully!');
    } else {
      alert('Error sending feedback: ' + result.error);
    }
  } catch (error) {
    console.error('Error sending feedback:', error);
    alert('Failed to send feedback. Please try again.');
  }
}

async function handleSendEmail(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact/send-instant-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formJson),
      });
      const result = await response.json();
      if (response.ok) {
        alert('Email sent successfully!');
      } else {
        alert('Error sending email: ' + result.error);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email. Please try again.');
    }
  }    

const Contact = () => {
  return (
    <Box p={2}>
      <Stack className="text-center text-gray">
        <h2>Let's Connect</h2>
        <p> Leave your contact information so I can reach out or send me an instant message</p>
      </Stack>

      <Grid2 
        gap={2}
        display={{ lg: 'flex'}} 
        justifyContent={"space-between"} 
      >
        <LeaveContactInfo handleSubmit={handleSubmit} />
        <SendInstantEmail handleSendEmail={handleSendEmail} />
      </Grid2>

      <footer className='mt-8'>
        <Footer/>
      </footer>
    </Box>
  );
};

export default Contact;