import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';

const ProjectPreview = ({ projectLink, frontPageImage }) => {
  const [linkError, setLinkError] = useState(false);

  const handleLinkError = () => {
    setLinkError(true);
  };

  return (
    <Paper elevation={3}>
      <Link href={projectLink} target="_blank" rel="noopener noreferrer">
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={12}>
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
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                p: 2,
                textAlign: 'center',
              }}
            >
              Click to view project
            </Box>
          </Grid>
        </Grid>
      </Link>
    </Paper>
  );
};

export default ProjectPreview;