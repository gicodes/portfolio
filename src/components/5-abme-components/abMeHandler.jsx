import MyPortrait from "../../images/myPortrait.JPG";
import Hero from "../0-hero-components/hero-kits";
import Tools from "./myTools&Tech";

const AboutMe = () => {
  const divider = (
    <div className='divider is-light'>
      <p className='title has-text-success'>
        About Me
      </p>
    </div>
  )

  const desc = (
    <div
      className='has-text-white 
        is-size-6 nom-fonts'>
      <p className="pt-5">
        Hello there! I'm Gideon Chino, alias gi codes. I hail from the south-eastern region of Nigeria.</p>

      <p>
        I am passionate about developing well-architectured software that help solve real-life problems
        and create value in these fast-paced, tech-driven times.</p>
      <p className="pt-5">
        Over the past years, I've been privileged to learn and leverage a good number of developer tools
        that are valuable in the world of software engineering today,
        creating suitable environments for modern application of object oriented programming.</p>
      <p>
        I am particularly interested in certain key aspects of software engineering like:
        Serverless Functions, Cloud Computing, System Design Principles and Design Patterns.</p>
      <p className="pt-5">
        If it interests you to know, I love sports, I support Manchester United Football Club, and my best video (adventure) game is Call of Duty: Black Ops III.
      </p>
      
    </div>
  )

  return (
    <Hero>
      <div className='container'>
        <div className='columns is-mobile'>
          <div className='column is-two-fifths'
            style={{
              display: 'flex',
              alignSelf: 'center',
              // paddingBottom: '6em',
              height: '100%',
            }}>
            <img
              src={MyPortrait}
              alt='My portrait'
              className='image'
            />
          </div>
          <div className='column is-three-fifths'>
            <div className='card-content nom-fonts'>
              {divider}
              {desc}
              <div className='divider is-dark pt-3'>
                  <h3 className='has-text-ash 
                      is-size-4 has-text-centered'>
                    Tools & Tech Stack</h3>
                </div>
                <Tools />
            </div>
          </div>
        </div >
      </div >
    </Hero >
  )
}

export default AboutMe;