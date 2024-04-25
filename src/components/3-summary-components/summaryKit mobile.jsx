import myAvatar from '../../images/myAvatar.JPG'

import Grid from '@mui/material/Unstable_Grid2/Grid2'

const intro = (
  <div>
    <p className='is-size-5 sp-fonts has-text-success'
      style={{ marginBottom: '.5em' }}>
      Hi there <span className='wave'>👋</span> my name is
    </p>
    <h1 className='is-size-2 has-text-white'>
      <p className="fs-large" style={{ marginBottom: '.5em', wordSpacing: '.25em' }}><b>Gideon Iduma</b></p>
      <p className='has-text-ash g-fonts'>
        I <i className='fa-solid fa-heart has-text-danger'></i> building Software Applications
      </p>
    </h1>
  </div>
)

const summary = (
  <div className='is-size-6 sp-fonts has-text-ash'>
    <p>
      Over the years, I've studied and written codes with scripting languages
      that are valuable in software engineering today. 
    </p>
    <p className='mt-2'>
      I've used this experience in building attractive, responsive web & mobile apps that work in production and highly scalable if need be. 
    </p>
    <p className='mt-2'>
      My principle in any given task is great communication, patience to understand the ideas and needs of my client
    </p>
  </div>
)

const avatar = (
  <div className='column'
    style={{
      display: 'flex',
      marginTop: '3.5em',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
    <img
      alt='my avatar'
      className='Avatar'
      src={`${myAvatar}?w=248&fit=crop&auto=format`}
      srcSet={`${myAvatar}?w=248&fit=crop&auto=format&dpr=2 2x`} />
  </div>
)

const Summary = () => {
  return (
    <Grid>
      <Grid item>
          <div className='columns mr-6'>
            <Grid item xs={12} sm={12}>
              <div className='column is-three-quarters'>
                <div className='ApplyBodyBC mt-5 ml-6'>
                  {intro}
                  <br />
                  <Grid item xs={12} sm={12}>
                    {summary}
                  </Grid>
                </div>
              </div>
            </Grid>
            <Grid className='pl-6'
              xs={14} sm={6}>
              {avatar}
            </Grid>
          </div>
      </Grid>
    </Grid>
  )
}


export default Summary;