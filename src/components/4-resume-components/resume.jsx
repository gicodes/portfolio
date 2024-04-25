import Grid from '@mui/material/Unstable_Grid2/Grid2';

// const style = {
//   position: 'absolute',
//   border: '2px solid #000',
//   boxShadow: 24,
// };

const Resume = () => {

  return (
    <Grid className='container'>
      <div className='column mt-5'>
      <button className='button is-large is-BC'>
            <a className='has-text-success' href='https://drive.google.com/file/d/1nulrY_WJhBmml483HR0MUlqQ2-uR5Pnp/view?usp=drive_link'>View Resume</a>
          </button>
      </div>
    </Grid>
  )
}


export default Resume;