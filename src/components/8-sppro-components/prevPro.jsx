import Hero from "../0-hero-components/hero-kits";

import Card0 from "./cards-comp/card0";
import Card0i from "./cards-comp/card0i";
import Card1 from "./cards-comp/card1";
import Card1i from "./cards-comp/card1i";

const Projects = () => {
  const divider = (
    <div className='divider is-light'>
      <p className='title has-text-warning'> Previous Projects</p>
    </div>
  )

  return (
    <Hero>
      <div className="container">
        {divider}
      </div>
      <br />
      <div className="container pr-5 pl-5">
        <div className="columns mt-6">
          <div className="column is-three-fifths">
            <Card0 />
          </div>
          <div className="column"
            style={{
              display: 'flex',
              alignItems: 'center'
            }}>
            <Card0i />
          </div>
        </div>
        <br />
        <div className="columns">
          <div className="column is-three-fifths">
            <Card1 />
          </div>
          <div className="column"
            style={{
              display: 'flex',
              alignItems: 'center'
            }}>
            <Card1i />
          </div>
        </div>
        <br />
      </div>
    </Hero>
  )
}

export default Projects;