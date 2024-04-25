import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Hero from "../0-hero-components/hero-kits";

import Card0 from "./cards-comp/card0"; // Afro-Fashion
import Card0i from "./cards-comp/card0i"; 
import Card3 from "./cards-comp/card3" // StarForge
import Card3i from "./cards-comp/card3i"
import Card4 from "./cards-comp/card4" // Ryder-GP
import Card4i from "./cards-comp/card4i"
import Card5 from "./cards-comp/card5" // TourCan
import Card5i from "./cards-comp/card5i"

const Projects = () => {
  const divider = (
    <div className='divider is-light'>
      <p className='title has-text-warning'>Projects</p>
    </div>
  )

  return (
    <Grid container>
      <Hero>
        <div>
          {divider}
        </div>
        <br />
        <Grid container>
          <div className="mt-6">
            <div className="column">
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
          <div className="mt-6">
            <div className="column">
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
          <div className="mt-6">
            <div className="column">
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
          <div className="mt-6">
            <div className="column">
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
        </Grid>
      </Hero>
    </Grid>
  )
}

export default Projects;
