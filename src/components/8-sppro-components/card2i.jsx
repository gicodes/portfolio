import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import IconButton from '@mui/material/IconButton';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import pic1 from '../../../src/images/maze-01.png';


const TitlebarImageList = () => {
  return (
    <ImageList
      sx={{ width: 1050, height: 470 }}>
      {
        itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              className='image-list'
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
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
    img: pic1,
    title: 'in-game',
    author: '@gicodes',
    rows: 2,
    cols: 2,
  }
];


export default TitlebarImageList;