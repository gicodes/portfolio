import Hero from "../0-hero-components/hero-kits";
import Desc from "./footDesc";

const Footer = () => {
  return (
    <Hero>
      <footer className='footer container'
        style={{ backgroundColor: '#282c30' }}>
        <div className='level-item'>
          <Desc />
        </div>
        <div className='level-item pt-6'>
          <br />
          <p className='control'>
            <a className='is-size-2
             has-text-success pr-6'
              href='https://github.com/gicodes'>
              <span className='icon pr-3'>
                <i className='fab fa-github'></i>
              </span>
            </a>
          </p>
          <p className='control'>
            <a className='is-size-2 
            has-text-success pr-6'
              href='https://linkedin.com/in/gideon-iduma-5311445a'>
              <span className='icon pr-3'>
                <i className='fab fa-linkedin'></i>
              </span>
            </a>
          </p>
          <p className='control'>
            <a className='is-size-2 
            has-text-success pr-6'
              href='https://twitter.com/pappichino'>
              <span className='icon pr-3'>
                <i className='fab fa-twitter'></i>
              </span>
            </a>
          </p>
          <p className='control'>
            <a className='is-size-2 
            has-text-success pr-6'
              href='https://gicodes9@gmail.com'>
              <span className='icon pr-4'>
                <i className='fas fa-envelope'></i>
              </span>
            </a>
          </p>
          <p className='control'>
            <a className='is-size-2 
            has-text-success'
              href='https://instagram.com/pappichino'>
              <span className='icon'>
                <i className='fab fa-instagram'></i>
              </span>
            </a>
          </p>
        </div>
      </footer>
    </Hero>
  )
}


export default Footer;