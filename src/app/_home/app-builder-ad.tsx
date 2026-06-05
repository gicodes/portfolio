import { Box, Paper, Container, Typography } from '@mui/material'
import React from 'react'

const AppBuilderAdd = () => {
  return (
    <Paper 
      sx={{ 
        bgcolor: 'inherit',
        p: {xs: 0.5, sm: 1, lg: 3},
        color: 'var(--text-primary)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 1)',
      }}
      elevation={2}  
    >
      <Container
        sx={{
          p: 3,
        }}
      >
        <Box
          sx={{
            gap: 4,
            textAlign: 'center',
            alignItems: 'center',
          }}
        >
          <Box>
            <Typography variant="h1" fontWeight={700} gutterBottom>
              Sketch Your Dream App with My App Builder
            </Typography>
            <Typography variant="h5" sx={{ opacity: 0.8}} gutterBottom>
              Whether you need a sleek portfolio, a dynamic blog, or a powerful e-commerce site, my App Builder has got you covered. With an intuitive interface and a wide range of customizable templates, you can create stunning websites without any coding experience. Get started today and bring your ideas to life!
            </Typography>
          </Box>
        </Box>
      </Container>
    </Paper>
  )
}

export default AppBuilderAdd