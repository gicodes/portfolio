const SocialHeader = () => {

  return (
    <nav
      className='navbar container'
      style={{ backgroundColor: '#282c30' }}
      aria-label='main navigation' role='navigation'>
      <div className='navbar-end'>
        <div className='level-item sp-fonts'>
          <p className='control'>
            <a className='is-size-4 
              has-text-white pr-6'
              href='https://github.com/gicodes'>
              <span className='icon pr-3'>
                <i className='fab fa-github'></i>
              </span>
              <span className="is-size-5">
                Github
              </span>
            </a>
          </p>
          <p className='control'>
            <a className='is-size-4 
              has-text-white pr-6'
              href='https://linkedin.com/in/gideon-iduma-5311445a'>
              <span className='icon pr-3'>
                <i className='fab fa-linkedin'></i>
              </span>
              <span className="is-size-5">
                Linkedin
              </span>
            </a>
          </p>
          <p className='control'>
            <a className='is-size-4 
            has-text-white pr-6'
              href='https://twitter.com/pappichino'>
              <span className='icon pr-3'>
                <i className='fab fa-twitter'></i>
              </span>
              <span className="is-size-5">
                Twitter
              </span>
            </a>
          </p>
          <p className='control'>
            <a className='is-size-4 
            has-text-white'
              href='https://gicodes9@gmail.com'>
              <span className='icon pr-3'>
                <i className='fas fa-envelope'></i>
              </span>
              <span className="is-size-5">
                Email
              </span>
            </a>
          </p>
        </div>
      </div>
    </nav>
  )
}


export default SocialHeader;