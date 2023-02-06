import Hero from '../0-hero-components/hero-kits';

const FooterDesc = () => {
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
          Ok, Let's Connect!
          <i className="fa-solid fa-handshake 
          is-choco pl-2"></i>
        </div>
        <p
          className='subtitle sp-fonts'
          style={{
            color: 'whitesmoke',
            lineHeight: '100px',
            fontWeight: 'bolder',
            letterSpacing: '1px',
          }}>
          For more information, collaboration, or a welcome interaction, kindly reach out. I always
          <span
            style={{
              color: 'tomato',
              fontWeight: 'bold',
              fontStyle: 'italic',
              letterSpacing: '2px',
            }}> res</span>pond
        </p>
        <p
          className='is-size-4 sp-fonts'
          style={{
            color: 'whitesmoke',
            textAlign: 'center',
            lineHeight: '100px',
          }}>  Remember, an idea that is expressed and developed, cost less than poor service.</p>
      </div>
    </Hero >
  )
}

export default FooterDesc;