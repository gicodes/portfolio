import Hero from "../0-hero-components/hero-kits";

import Card0 from "./cards-comp/card0"; // Afro-Fashion
import Card0i from "./cards-comp/card0i";
import Card3 from "./cards-comp/card3" // StarForge
import Card3i from "./cards-comp/card3i"
import Card4 from "./cards-comp/card4" // Ryder-GP
import Card4i from "./cards-comp/card4i"
import Card5 from "./cards-comp/card5" // Tourcan
import Card5i from "./cards-comp/card5i"

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
            <Card3 />
          </div>
          <div className="column"
            style={{
              display: 'flex',
              alignItems: 'center'
            }}>
            <Card3i />
          </div>
        </div>
        <br/>
        <div className="columns">
          <div className="column is-three-fifths">
            <Card5 />
          </div>
          <div className="column"
            style={{
              display: 'flex',
              alignItems: 'center'
            }}>
            <Card5i />
          </div>
        </div>
        <br />
        <div className="columns">
          <div className="column is-three-fifths">
            <Card4 />
          </div>
          <div className="column"
            style={{
              display: 'flex',
              alignItems: 'center'
            }}>
            <Card4i />
          </div>
        </div>
      </div>
    </Hero>
  )
}

export default Projects;