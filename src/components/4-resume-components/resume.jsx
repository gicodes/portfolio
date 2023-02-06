import * as React from 'react';
import Box from '@mui/material/Box';
import MyResume from './myResume.jpg';
import Modal from '@mui/material/Modal';

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
    <div className='container'>
      <div className='column'>
        <button className='button is-large is-BC'
          onClick={handleOpen}
          onClose={handleClose}
          style={{ marginTop: '2.5em' }}>
          <span className='has-text-success'>View Resume</span>
        </button>
        <Modal
          open={open}
          aria-labelledby="resume-modal"
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
    </div>
  )
}


export default Resume;