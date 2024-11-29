import { useState } from 'react';
import styles from "../page.module.css";
import { fut, msco, funFacts } from './gtkm2';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Card, Stack, Box, Pagination } from '@mui/material';

export const TechStack = () => {
  const [page, setPage] = useState(1);
  const smallScreen = useMediaQuery('(max-width: 600px)');
  
  const pagesContent = [msco, fut, funFacts];
  const cardStyles = [styles.styledCard1, styles.styledCard2, styles.styledCard3];
  
  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Card 
      elevation={8}
      className={styles[`styledCard${page}`] || cardStyles[page - 1]}
      sx={{
        my: 2,
        px: 2,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Box
        p={'20px 0 0'}
        width={{ sm: '90%', lg: '100%'}}
        height={{ xs: '400px', sm: '375px', lg: '360px'}}
      >
        <Stack 
          fontSize={'12.5px'}
          padding={{ sm: 1, lg: '10px 20px'}}
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