import Hero from '../0-hero-components/hero-kits'
import myAvatar from '../../images/myAvatar.JPG'

const Summary = () => {
  return (
    <Hero>
      <div className='container'>
        <div className='columns is-gapless'>
          <div className='column is-three-quarters'>
            <div className='ApplyBodyBC space-up ml-6'>
              <p className='is-size-4 sp-fonts 
                has-text-success'
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
      </div>
    </Hero>
  )
}

export default Summary;