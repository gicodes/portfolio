const SocialBar = () => {

  return (
    <div className='container'>
      <div className='sp-fonts mt-6'>
        <p className='control'>
          <a className='is-size-5 
            has-text-white pr-6'
            href='https://linkedin.com/in/gideon-iduma-5311445a'>
            <span className='icon pr-3'>
              <i className='fab fa-linkedin'></i>
            </span>
            <span> Linkedin </span>
          </a>
        </p>
        <p className='control'>
          <a className='is-size-5 
          has-text-white pr-6'
            href='https://twitter.com/pappichino'>
            <span className='icon pr-3'>
              <i className='fab fa-twitter'></i>
            </span>
            <span> Twitter </span>
          </a>
        </p>
        <p className='control'>
          <a className='is-size-5 
            has-text-white pr-6'
            href='https://github.com/gicodes'>
            <span className='icon pr-3'>
              <i className='fab fa-github'></i>
            </span>
            <span> Github </span>
          </a>
        </p>
        <p className='control'>
          <a className='is-size-5 has-text-white'
            href='https://gicodes9@gmail.com'>
            <span className='icon pr-3'>
              <i className='fas fa-envelope'></i>
            </span>
            <span> Email </span>
          </a>
        </p>
      </div>
    </div>
  )
}


export default SocialBar;