import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Hero from "../0-hero-components/hero-kits";

import Card0 from "./cards-comp/card0";
import Card0i from "./cards-comp/card0i";
import Card1 from "./cards-comp/card1";
import Card1i from "./cards-comp/card1i";
// import Card2 from "./cards-comp/card2";
// import Card2i from "./cards-comp/card2i";
// import Card3 from "./cards-comp/card3";
// import Card3i from "./cards-comp/card3i";

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
        <div className="container">
          <div className="columns mt-6" style={{ marginRight: '0', marginLeft: '0' }}>
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
          <div className="columns mt-6" style={{ marginRight: '0', marginLeft: '0' }}>
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
          {/* <br />
          <div className="columns mt-6" style={{ marginRight: '0', marginLeft: '0' }}>
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
          <br />
          <div className="columns mt-6" style={{ marginRight: '0', marginLeft: '0' }}>
            <div className="column is-three-fifths">
              <Card2 />
            </div>
            <div className="column"
              style={{
                display: 'flex',
                alignItems: 'center'
              }}>
              <Card2i />
            </div>
          </div> */}
          <br />
        </div>
      </Hero>
    </Grid>
  )
}


export default Projects;