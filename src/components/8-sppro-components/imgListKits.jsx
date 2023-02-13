import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import ImageList from '@mui/material/ImageList';
import IconButton from '@mui/material/IconButton';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

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

const ImageListKit = (itemData) => {

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <ImageList
      className='image-list'
      sx={{
        height: {
          xs: 300,
          sm: 400,
          md: 500,
        },
      }}
    >
      {
        itemData.map((item) => (
          <ImageListItem key={item.img}
            sx={{
            }}
          >
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              onClick={handleOpen}
            />
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="card modal"
            >
              <Box sx={style}>
                <img
                  alt={item.title}
                  src={`${item.img}`}
                  srcSet={`${item.img}`}
                />
              </Box>
            </Modal>
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

  )
}


export default ImageListKit;