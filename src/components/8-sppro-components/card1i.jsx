import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import ImageList from '@mui/material/ImageList';
import IconButton from '@mui/material/IconButton';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import LoginPage from '../../../src/images/bale+factory+signin+page.png';
import SignupPage from '../../../src/images/bale+factory+signup+page.png';
import LandingPage from '../../../src/images/bale+factory+landing+page.png';
import CartsPage from '../../../src/images/bale+factory+carts+page+demo.png';

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
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <ImageList
      className='image-list'
      sx={{ width: 525, height: 470 }}
    >
      {
        itemData.map((item) => (
          <ImageListItem key={item.img}>
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
              aria-labelledby="card1 modal"
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
  );
}


const itemData = [
  {
    img: LandingPage,
    title: 'Landing Page',
  },
  {
    img: LoginPage,
    title: 'Login',
  },
  {
    img: SignupPage,
    title: 'Sign up',
  },
  {
    img: CartsPage,
    title: 'Cart',
  },
];


export default TitlebarImageList;