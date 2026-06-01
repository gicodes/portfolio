"use client";

import { Box, Typography, Grid, Card, CardContent, Chip, IconButton, Container, Stack, Button, Divider } from '@mui/material';
import { ArrowOutward, GitHub, Launch } from '@mui/icons-material';
import { projects } from '../repositories/projects';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

export function FeaturedShowcase() {
  const fallBackFrontPageImg="https://via.placeholder.com/400x300";
  const [linkError, setLinkError] = useState(false);
  const handleLinkError = () => setLinkError(true);

  return (
    <Box 
      sx={{ 
        mt: 5, 
        py: 10, 
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography 
            variant="overline" 
            sx={{ color: '#00ff9d', letterSpacing: 3, fontWeight: 500 }}
          >
            PORTFOLIO
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 2, fontWeight: 700 }}>
            Selected Works
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 600, mx: 'auto', color: 'text.secondary' }}>
            Projects I&apos;ve poured my soul into. Each one is a story of problem-solving and creativity.
          </Typography>
        </Box>

        <Grid container spacing={10}>
          {projects.slice(0,3).map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 4,
                    overflow: 'hidden',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-12px)',
                      boxShadow: '0 30px 60px rgba(0, 255, 157, 0.15)',
                    },
                  }}
                >
                  <Box 
                    sx={{ 
                      position: 'relative', 
                      height: 240, 
                      overflow: 'hidden' 
                    }}
                  >
                    <Stack sx={{ width: '100%', height: '100%' }}>
                      {linkError ? (
                        <Image
                          src={fallBackFrontPageImg}
                          alt={project.title}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      ) : (
                        <iframe
                          title="Project Preview"
                          src={project.link}
                          style={{ border: 0, width: '100%', height: '300px' }}
                          onLoad={() => setLinkError(false)}
                          onError={handleLinkError}
                        />
                      )}
                    </Stack>
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        bgcolor: 'rgba(0,0,0,0.4)',
                        opacity: 0,
                        transition: '0.3s',
                        '&:hover': { opacity: 1 },
                      }}
                    />
                  </Box>

                  <CardContent sx={{ p: 3.5 }}>
                    <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 600 }}>
                      {project.title}
                    </Typography>

                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.7 }}>
                      {project.description}
                    </Typography>

                    <Chip
                      label={Array.isArray(project.category) ? project.category.join(', ') : project.category}
                      sx={{
                        bgcolor: 'rgba(0, 255, 157, 0.15)',
                        color: 'navy',
                        fontWeight: 600,
                      }}
                    />

                    {/* Tech Stack */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, my: 3 }}>
                      {project.tech.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            bgcolor: '#252525',
                            color: '#aaa',
                            '&:hover': { bgcolor: '#00ff9d', color: '#000' },
                          }}
                        />
                      ))}
                    </Box>

                    {/* Action Buttons */}
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <IconButton
                        href={project.link}
                        target="_blank"
                        sx={{ 
                          border: '1px solid #00ff9d',
                          color: '#00ff9d',
                          '&:hover': { bgcolor: '#00ff9d', color: '#000' }
                        }}
                      >
                        <Launch />
                      </IconButton>
                      <IconButton
                        href={project.source}
                        target="_blank"
                        sx={{ border: '1px solid #333', color: '#aaa' }}
                      >
                        <GitHub />
                      </IconButton>
                      <IconButton
                        sx={{ ml: 'auto', color: '#00ff9d' }}
                      >
                        <ArrowOutward />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
            Want to see more?
          </Typography>
          <Button 
            variant="contained" 
            color="secondary" 
            href="/repositories"
            endIcon={<ArrowOutward />}
          >
            View Full Portfolio
          </Button>
        </Box>
        <Divider sx={{ my: 10, bgcolor: '#ccc' }} />
      </Container>
    </Box>
  );
}