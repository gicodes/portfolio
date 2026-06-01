'use client';

import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  Stack,
  Typography,
  Fade,
} from '@mui/material';
import {
  ArrowBackRounded,
  TouchAppRounded,
  LanguageRounded,
  PhoneIphoneRounded,
} from '@mui/icons-material';

export default function Page() {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <Box>
      <Fade in={!showOptions}>
        <Box
          sx={{
            minHeight: '100vh',
            position: 'relative',
            display: showOptions ? 'none' : 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: 2,
          }}
        >
          {/* Background */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'url(/builder2.avif)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          {/* Overlay */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to bottom, rgba(0,0,0,.45), rgba(0,0,0,.65))',
            }}
          />

          {/* Content */}
          <Card
            elevation={0}
            sx={{
              position: 'relative',
              zIndex: 1,
              maxWidth: 720,
              width: '100%',
              p: { xs: 3, md: 5 },
              borderRadius: 4,
              backdropFilter: 'blur(12px)',
              background: 'rgba(255,255,255,0.9)',
            }}
          >
            <Typography
              variant="h2"
              fontWeight={700}
              textAlign="center"
              gutterBottom
            >
              Build Your Next App
            </Typography>

            <Typography
              variant="h6"
              color="text.secondary"
              textAlign="center"
              sx={{ mb: 4 }}
            >
              From idea to launch using proven technologies,
              reusable features, and a structured development process.
            </Typography>

            <Button
              fullWidth
              size="large"
              variant="contained"
              endIcon={<TouchAppRounded />}
              onClick={() => setShowOptions(true)}
              sx={{
                py: 1.75,
                borderRadius: 3,
                textTransform: 'none',
                fontSize: '1rem',
              }}
            >
              Start Building
            </Button>

            <Typography
              variant="body2"
              color="text.secondary"
              textAlign="center"
              mt={3}
            >
              Generate a project structure and estimate based on your
              application requirements.
            </Typography>
          </Card>
        </Box>
      </Fade>

      <Fade in={showOptions}>
        <Box
          sx={{
            display: !showOptions ? 'none' : 'block',
            maxWidth: 900,
            mx: 'auto',
            px: 2,
            py: 8,
          }}
        >
          <Button
            startIcon={<ArrowBackRounded />}
            onClick={() => setShowOptions(false)}
            sx={{ mb: 4 }}
          >
            Back
          </Button>

          <Typography
            variant="h4"
            fontWeight={700}
            textAlign="center"
            gutterBottom
          >
            Choose Application Type
          </Typography>

          <Typography
            color="text.secondary"
            textAlign="center"
            mb={5}
          >
            Select the platform you want to build for.
          </Typography>

          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={3}
          >
            <Card
              component="a"
              href="/app-builder/web"
              sx={{
                flex: 1,
                p: 4,
                textDecoration: 'none',
                cursor: 'pointer',
                transition: '0.25s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 6,
                },
              }}
            >
              <LanguageRounded
                color="primary"
                sx={{ fontSize: 40, mb: 2 }}
              />

              <Typography variant="h6" fontWeight={600}>
                Web Application
              </Typography>

              <Typography color="text.secondary" mt={1}>
                Responsive applications accessed through a browser.
              </Typography>
            </Card>

            <Card
              component="a"
              href="/app-builder/mobile"
              sx={{
                flex: 1,
                p: 4,
                textDecoration: 'none',
                cursor: 'pointer',
                transition: '0.25s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 6,
                },
              }}
            >
              <PhoneIphoneRounded
                color="secondary"
                sx={{ fontSize: 40, mb: 2 }}
              />

              <Typography variant="h6" fontWeight={600}>
                Mobile Application
              </Typography>

              <Typography color="text.secondary" mt={1}>
                Native or cross-platform apps for iOS and Android.
              </Typography>
            </Card>
          </Stack>
        </Box>
      </Fade>
    </Box>
  );
}