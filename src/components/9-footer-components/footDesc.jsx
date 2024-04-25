import Hero from '../0-hero-components/hero-kits';

const FooterDesc = () => {

  const mobStyle = {
    justifyContent: 'center',
    textAlign: 'center',
    display: 'flex'
  }

  const handShake = (
    <i className="fa-solid fa-handshake 
          is-choco pl-2">
    </i>
  )

  const resPond = (
    <span>
      <span
        style={{
          color: 'tomato',
          fontWeight: 'bold',
          fontStyle: 'italic',
          letterSpacing: '2px',
        }}> res</span>pond.
    </span>
  )

  return (
    <Hero>
      <div className="container">
        <div
          className='is-size-1 g-fonts'
          style={{
            color: 'lemonchiffon',
            letterSpacing: '5px',
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          Ok, Let's Connect! {handShake}
        </div>
        <div
          sx={{ mobStyle }}
          style={{ color: 'whitesmoke' }}
          className='has-text-centered subtitle sp-fonts mt-4'
        >
          For more information, collaboration, or a welcome interaction, kindly reach out. I always {resPond}
          <p className='has-text-centered mt-4'>
            Remember, an idea that is expressed and developed, cost less than poor service.
          </p>
        </div>
      </div>
    </Hero >
  )
}


export default FooterDesc;