import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

import ImageList from '@mui/material/ImageList';
import IconButton from '@mui/material/IconButton';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const style = {
  position: 'absolute',
  border: '2px solid #000',
  top: '50%',
  left: '50%',
  boxShadow: 24,
  bgcolor: 'white',
  transform: 'translate(-50%, -50%)',
  width: { xs: '100%', sm: '100%', md: 'auto' },
};

const ImageListKit = (itemData) => {

  const [open, setOpen] = useState(false);
  const [image, setImage] = useState()
  const handleClose = () => setOpen(false);
  const handleOpen = (item) => { setImage(item); setOpen(true) }

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="card modal"
      >
        <Grid container>
          <Box sx={style}>
            <img
              loading="lazy"
              alt={image?.title}
              src={`${image?.img}?w=248&fit=crop&auto=format`}
            />
          </Box>
        </Grid>
      </Modal>
      <ImageList
        className='image-list'
        sx={{
          height: {
            xs: 300,
            sm: 400,
            md: 500,
          },
        }}>
        {
          itemData.map((item) => (
            <ImageListItem key={`${item.img}`}
              onClick={() => handleOpen(item)}
            >
              <img
                alt={item.title}
                src={`${item.img}?w=248&fit=crop&auto=format`}
              />
              <ImageListItemBar
                title={item.title}
                actionIcon={
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${item.title}`}>
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
      </ImageList >
    </>
  )
}


export default ImageListKit;