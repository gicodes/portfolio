import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import Maze from '../../../images/maze-01.png';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

const style = {
  position: 'absolute',
  border: '2px solid #000',
  transform: 'translate(-50%, -50%)',
  left: '50%',
  top: '50%',
  width: 999,
  height: 400,
  boxShadow: 24,
  bgcolor: 'white',
};

const MazeCard = () => {

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <Grid container>
      <figure
        className="image"
        sx={{
          height: {
            xs: 300,
            sm: 400,
            md: 500,
            lg: 600,
          },
        }}
      >
        <img
          src={Maze}
          alt="Maze in-game"
          onClick={handleOpen}
          className='image-list'
        />
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="card1 modal"
        >
          <Box sx={style}>
            <img
              src={Maze}
              alt="Maze in-game"
            />
          </Box>
        </Modal>
      </figure>
    </Grid>
  );
}


export default MazeCard;