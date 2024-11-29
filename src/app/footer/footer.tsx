import { Box, Grid2, Stack } from '@mui/material';
import { socials } from './e-links';
import React from 'react'
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <Box textAlign={'center'}>
        <Grid2
          p={2}
          gap={2}
          width={'100%'}
          margin={'auto'}
          display={'flex'}
          justifyContent={'center'}
        >
          { socials.map((social, index) => (
            <Stack m={1} key={index}>
              <Link
                key={index}
                href={'/'}
                target="_blank"
                rel="noreferrer"
              > 
                {social.icon}
              </Link>
            </Stack>
          ))}
        </Grid2>

        <p className="text-gray footer-outro">
          &copy; 2022 - 2024. All rights reserved.
        </p>
      </Box>   
    </footer>       
  )
}

export default Footer