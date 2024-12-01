import { useState } from 'react';
import styles from "../page.module.css";
import useMediaQuery from '@mui/material/useMediaQuery';
import { fut, msco, funFacts } from './tech-stack-array';
import { Card, Stack, Box, Pagination } from '@mui/material';

export const TechStack = () => {
  const [page, setPage] = useState(1);
  const smallScreen = useMediaQuery('(max-width: 600px)');
  
  const pagesContent = [msco, fut, funFacts];

  const cardBackgrounds = [
    '/styledCard1.avif',
    '/styledCard2.avif',
    '/styledCard3.avif',
  ];

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Card
      elevation={8}
      sx={{
        my: 2,
        px: 2,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        color: page === 2 ? 'black' : 'white',
        backgroundColor: page === 2 ? 'white' : 'black',
        backgroundImage: `url(${cardBackgrounds[page - 1]})`,
        backgroundSize: {xs: 'none', sm: 'none', lg: 'cover'},
      }}
    >
      <Box
        py={3}
        px={{ sm: 0, lg: 4 }}
        width={{ sm: '90%', lg: '100%' }}
        height={{ xs: '400px', sm: '375px', lg: '360px' }}
      >
        <Stack
          fontSize="12.5px"
          className="font-special"
          padding={{ sm: 1, lg: '10px 8%' }}
        >
          {pagesContent[page - 1]}
        </Stack>
      </Box>
      
      <Pagination
        page={page}
        count={pagesContent.length}
        onChange={handlePageChange}
        className={styles.pagination}
        sx={{ my: 3, alignSelf: 'flex-end' }}
        size={smallScreen ? 'small' : 'medium'}
      />
    </Card>
  );
}