import MyPortrait from "../../images/myPortrait0.jpeg";
import Tools from "./myTools&Tech mobile";

const AboutMe = () => {
  const divider = (
    <div className='divider is-light'>
      <p className='title has-text-success'>About Me</p>
    </div>
  )

  const desc = (
    <div>
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
        I am particularly interested in certain key aspects of software engineering like
        Serverless Functions, Cloud Computing, System Design Principles and Design Patterns.</p>
      <p className="pt-5">
        If it interests you to know, I support Manchester United, and my best video (adventure) game is Call of Duty: Black Ops III.
      </p>
    </div>
  )

  return (
    <div className='container is-fluid mt-6'>
      <div className='columns'>
        <div className='column'
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <img
            src={MyPortrait}
            alt='My portrait'
            className="image"
          />
        </div>

        <div className='column is-three-fifths'>
          <div className='card-content nom-fonts'>
            {divider}
            <div
              className='has-text-white 
                  is-size-6 nom-fonts'>
              {desc}
              <div className='divider is-dark pt-3'>
                <h3 className='has-text-ash 
                      is-size-4 has-text-centered'>
                  My Tools & Tech Stack
                </h3>
              </div>
              <div>
                <Tools />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default AboutMe;