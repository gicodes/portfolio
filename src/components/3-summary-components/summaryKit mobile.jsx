import myAvatar from '../../images/myAvatar.JPG'
import Hero from '../0-hero-components/hero-kits'

import Grid from '@mui/material/Unstable_Grid2/Grid2'

const Summary = () => {
  return (
    <Grid>
      <Grid item>
        <Hero>
          <div className='columns mr-6'>
            <Grid item
              xs={12} sm={12}
            // md={4} lg={4}
            >
              <div className='column is-three-quarters'>
                <div className='ApplyBodyBC mt-5 ml-6'>
                  <p className='is-size-4 sp-fonts has-text-success'
                    style={{ marginBottom: '.5em' }}>
                    Hi there <i className='fa-solid fa-hand has-text-warning'></i>, my name is
                  </p>
                  <h1 className='is-size-2 has-text-white'>
                    <p style={{ marginBottom: '.5em', wordSpacing: '.25em' }}><b>Gideon Chinomso, Iduma.</b></p>
                    <p className='has-text-ash g-fonts'>
                      I <i className='fa-solid fa-heart has-text-danger'></i> building Software Applications.
                    </p>
                  </h1>
                  <br />
                  <Grid item
                    xs={12} sm={12}
                  // md={4} lg={4}
                  >
                    <h1 className='is-size-6 sp-fonts has-text-ash'>
                      <p>
                        As a Software Engineer with experience in full-stack development
                      </p>
                      <p>
                        I've worked with groups of professionals on tasking projects
                      </p>
                      <p>
                        Where I observed protocols and solved real-life problems
                      </p>
                    </h1>
                  </Grid>
                </div>
              </div>
            </Grid>
            <Grid
              className='pl-6'
              xs={14} sm={6}
            // md={4} lg={4}
            >
              <div className='column'
                style={{
                  display: 'flex',
                  marginTop: '3.5em',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img
                  alt='my avatar'
                  className='Avatar'
                  src={`${myAvatar}?w=248&fit=crop&auto=format`}
                  srcSet={`${myAvatar}?w=248&fit=crop&auto=format&dpr=2 2x`} />
              </div>
            </Grid>
          </div>
        </Hero>
      </Grid>
    </Grid >
  )
}

export default Summary;