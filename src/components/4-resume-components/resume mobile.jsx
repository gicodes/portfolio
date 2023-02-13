import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

import MyResume from '../../images/myResume.jpg';

const style = {
  position: 'absolute',
  border: '2px solid #000',
  boxShadow: 24,
};

const Resume = () => {

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <Grid container>
      <div className='column mt-5'>
        <Grid item sm={12} md={12}
          style={{
            display: 'flex',
            justifyContent: 'center'
          }}>
          <button className='button is-large is-BC'
            onClick={handleOpen}
            onClose={handleClose}>
            <span className='has-text-success'>View Resume</span>
          </button>
        </Grid>
        <Modal
          open={open}
          aria-label="resume-modal"
        >
          <Box sx={style}>
            <div>
              <button
                className='delete button is-danger'
                onClick={handleClose}
              />
            </div>
            <img
              src={MyResume}
              alt='My Resume'
              style={{
                width: '100vw',
                height: '100vh',
                objectFit: 'contain',
              }}
            />
          </Box>
        </Modal>
      </div>
    </Grid >
  )
}


export default Resume;