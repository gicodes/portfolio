import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import MyResume from '../../images/myResume.png';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

const style = {
  position: 'absolute',
  border: '2px solid #000',
  boxShadow: 24,
};

const Resume = () => {

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <Grid className='container'>
      <div className='column mt-5'>
        <button className='button is-large is-BC'
          style={{ marginLeft: '-0.66em', }}
          onClick={handleOpen}
          onClose={handleClose}
        >
          <span className='has-text-success'>View Resume</span>
        </button>
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
    </Grid>
  )
}


export default Resume;