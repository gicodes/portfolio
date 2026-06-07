import { Box, Card, Grid, Typography } from '@mui/material'
import React from 'react'

const WebDevDescription = () => {
  return (
    <Card 
      variant="outlined" 
      sx={{ 
        py: 3, 
        px: 2, 
        bgcolor: 'rgba(0,0,0,0.03)' 
      }}
    >
      <Grid display={'flex'} flexDirection={'column'} gap={2}>
        <Typography variant="body2">
          A web app is a software application that runs on a web server and is accessed through a web browser. It can be as simple as a static website or as complex as an e-commerce platform, social media site, or online banking system. Web apps are built using various technologies such as HTML, CSS, JavaScript, and backend frameworks like Node.js, Django, or Ruby on Rails.
        </Typography>

        <Box my={1} gap={1} display={'grid'}>
          <Typography variant="h5" fontWeight={500}>Base Setup</Typography>
          
          <Grid>
            <Typography fontWeight={500} sx={{ opacity: 0.75, p: 1 }}>What is included in the base setup? </Typography>
            <Card variant="outlined" sx={{ p: 2, bgcolor: 'rgba(0,0,0,0.03)' }}>
              <Typography variant="body2">
                The base setup includes the essential technologies and frameworks needed to build a modern web application. This typically consists of TypeScript for type safety, Next.js for server-side rendering and routing, React for building user interfaces, Express for handling backend logic and APIs, and Node.js as the runtime environment. This combination allows for efficient development of both frontend and backend components of a web app.
              </Typography>
            </Card>
          </Grid> 

          <Grid>
            <Typography fontWeight={500} sx={{ opacity: 0.75, p: 1 }}> Ecosystem/ Technology </Typography>
            <Card variant="outlined" sx={{ p: 2, bgcolor: 'rgba(0,0,0,0.03)' }}>
              <Typography variant='body2'> TypeScript, JavasScript, Node.js, React.js, Next.js, Firebase, Vercel</Typography>
            </Card>
          </Grid>
        </Box> 
      </Grid>
    </Card>
  )
}

export default WebDevDescription