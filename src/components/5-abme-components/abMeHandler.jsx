import Hero from "../0-hero-components/hero-kits";
// import MyPortrait from "../../images/MyPic";
import Tools from "./myTools&Tech";

const AboutMe = () => {
  const divider = (
    <div className='divider is-light'>
      <p className='title has-text-success'>About Me</p>
    </div>
  )

  return (
    <Hero>
      <div style={{ marginTop: '12em' }}>
        <div className='container'>
          <div className='columns is-mobile'>
            <div className='column is-two-fifths'>
              <img
                src='MyPortrait'
                alt='My portrait'
                className="image is-3by4" />
            </div>
            <div className='column is-three-fifths'>
              <div className='card-content nom-fonts'>
                {divider}
                <div
                  className='has-text-white 
                  is-size-5 nom-fonts'>
                  <p className="pt-5">
                    Hi! I'm Gideon, alias gi codes. I hail from the south-eastern region of Nigeria.</p>
                  <p>
                    I am passionate about developing well-architectured software that help to solve real-life problems
                    and give creativity a new dimension with agile applications.</p>
                  <p className="pt-5">
                    Over the past years, I've been privileged to train with and utilize a good number of developer tools
                    that are valuable in the world of software engineering today,
                    creating seamless dev-environs for web, mobile and other agile applications.</p>
                  <p className="pt-5">
                    I am particularly interested in certain key aspects of software engineering like;
                    Serverless Functions, Cloud Computing, System Design Principles and Design Patterns.</p>

                  <div className='divider is-dark pt-3'>
                    <h1 className='has-text-ash 
                      title has-text-centered '>
                      My Tools & Tech Stack</h1>
                  </div>
                  <Tools />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Hero>
  )
}


export default AboutMe;