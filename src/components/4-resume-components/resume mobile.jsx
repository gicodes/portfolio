import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';


const Resume = () => (
    <Grid container>
      <div className='column mt-5'>
        <Grid item sm={12} md={12}
          style={{
            display: 'flex',
            justifyContent: 'center'
          }}>
          <button className='button is-large is-BC'>
            <a className='has-text-success' href='https://drive.google.com/file/d/1nulrY_WJhBmml483HR0MUlqQ2-uR5Pnp/view?usp=drive_link'>View Resume</a>
          </button>
        </Grid>
      </div>
    </Grid >
  )

export default Resume;