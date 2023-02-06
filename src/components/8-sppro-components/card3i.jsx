import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import ImageList from '@mui/material/ImageList';
import IconButton from '@mui/material/IconButton';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import FrontPage from '../../../src/images/film-farm-00.png';
import Compare from '../../../src/images/film-farm-03.png';
import Second from '../../../src/images/film-farm-01.png';
import First from '../../../src/images/film-farm-02.png';

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


const TitlebarImageList = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ImageList
      className='image-list'
      sx={{ width: 525, height: 470 }}
    >
      {
        itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              onClick={handleOpen}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="card3 modal"
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
    </ImageList>
  );
}


const itemData = [
  {
    img: FrontPage,
    title: 'Front Page',
  },
  {
    img: First,
    title: 'Primary Search',
    author: '@gicodes',
  },
  {
    img: Second,
    title: 'Secondary Search',
  },
  {
    img: Compare,
    title: 'Compare Search',
  },
];


export default TitlebarImageList;