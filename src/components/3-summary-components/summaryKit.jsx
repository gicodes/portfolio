import Grid from '@mui/material/Unstable_Grid2/Grid2'
import Hero from '../0-hero-components/hero-kits'
import myAvatar from '../../images/myAvatar.JPG'

const Summary = () => {
  const introText = (
    <div>
      <p className='is-size-4 sp-fonts 
        has-text-success'
        style={{ marginBottom: '.5em' }}>
        Hi there <span className='wave'>👋</span> my name is
      </p>
      <h1 className='is-size-2 has-text-white'>
        <p style={{ marginBottom: '.5em', wordSpacing: '.25em' }}><b>Gideon Iduma</b></p>
        <p className='has-text-ash g-fonts'>
          I <i className='fa-solid fa-heart has-text-danger'></i> building Software Applications.
        </p>
      </h1>
    </div>
  )
  
  const summaryText = (
    <div className='is-size-6 sp-fonts has-text-ash'>
       <p>
      Over the years, I've studied and written codes with scripting languages
      that are valuable in software engineering today. 
    </p>
    <p className='mt-2'>
      I've used this experience in building attractive, responsive web & mobile apps that work in production and are highly scalable if need be. 
    </p>
    <p className='mt-2'>
      My principle in any professional task is great communication, enthusaism and patience to understand the ideas and needs of my client
    </p>
    </div>
  )

  return (
    <Grid container spacing={2}>
      <Hero>
        <div className='columns 
        mr-6
        '>
          <div className='column is-three-quarters'>
            <div className='ApplyBodyBC mt-5 ml-6 mw80'>
              {introText}
              <br />
              {summaryText}
            </div>
          </div>
          <div className='column'
            style={{ marginTop: '2em' }}>
            <img
              alt='my avatar'
              className='Avatar'
              src={`${myAvatar}?w=248&fit=crop&auto=format`}
              srcSet={`${myAvatar}?w=248&fit=crop&auto=format&dpr=2 2x`} />
          </div>
        </div>
      </Hero>
    </Grid>
  )
}

export default Summary;