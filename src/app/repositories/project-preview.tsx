"use client"

import Link from 'next/link';
import { useState } from 'react';
import { Box, Grid2, Paper, Stack } from '@mui/material';

interface ProjectPreviewProps {
  projectLink: string ;
}

let frontPageImage="https://via.placeholder.com/400x300";

const ProjectPreview: React.FC<ProjectPreviewProps> = ({ 
  projectLink 
}) => {
  const [linkError, setLinkError] = useState(false);
  const handleLinkError = () => setLinkError(true);

  return (
    <Paper elevation={3}>
      <Link 
        href={projectLink} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <Grid2 
          alignItems="center" 
          justifyContent="center"
        >
          <Stack>
            {linkError ? (
              <img
                src={frontPageImage}
                alt="Project Front Page"
                width={400}
                height={300}
                onError={handleLinkError}
              />
            ) : (
              <iframe
                title="Project Preview"
                src={projectLink}
                style={{ border: 0, width: '100%', height: '300px' }}
                onLoad={() => setLinkError(false)}
                onError={handleLinkError}
              />
            )}
          </Stack>

          <Stack>
            <Box
              sx={{
                p: 2,
                textAlign: 'center',
              }}
            >
              Click to view project
            </Box>
          </Stack>
        </Grid2>
      </Link>
    </Paper>
  );
};

export default ProjectPreview;