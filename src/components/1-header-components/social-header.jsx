const SocialHeader = () => {
  function mailTo() {
    window.location.href = "mailto:gicodes9@gmail.com";
  }
  const socials = (
    <div className='level-item sp-fonts pr-5'>
      <p className='control'>
        <a className='is-size-5 
          has-text-white pr-6'
          href='https://github.com/gicodes'>
          <span className='icon pr-3'>
            <i className='fab fa-github'></i>
          </span>
          <span>
            Github
          </span>
        </a>
      </p>
      <p className='control'>
        <a className='is-size-5 
          has-text-white pr-6'
          href='https://linkedin.com/in/gideon-iduma-5311445a'>
          <span className='icon pr-3'>
            <i className='fab fa-linkedin'></i>
          </span>
          <span>
            Linkedin
          </span>
        </a>
      </p>
      <p className='control'>
        <a className='is-size-5 
        has-text-white pr-6'
          href='https://twitter.com/pappichino'>
          <span className='icon pr-3'>
            <i className='fab fa-twitter'></i>
          </span>
          <span>
            Twitter
          </span>
        </a>
      </p>
      <p className='control'>
        <span className='is-size-5 
        has-text-white'
          onClick={()=> mailTo()}>
          <span className='icon pr-3'>
            <i className='fas fa-envelope'></i>
          </span>
          <span>
            Email
          </span>
        </span>
      </p>
    </div>
  )

  return (
    <nav
      className='navbar container'
      style={{ backgroundColor: '#282c30' }}
      aria-label='main navigation' role='navigation'>
      <div className='navbar-end mt-6'>
        {socials}
      </div>
    </nav>
  )
}


export default SocialHeader;