import Hero from "../0-hero-components/hero-kits";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import Card1 from "./card1";
import Card1i from "./card1i";
import Card2 from "./card2";
import Card2i from "./card2i";
import Card3 from "./card3";
import Card3i from "./card3i";

const Projects = () => {
  const divider = (
    <div className='divider is-light'>
      <p className='title has-text-success'> Previous Projects</p>
    </div>
  )

  return (
    <Hero>
      <div className="container">
        {divider}
      </div>
      <br />
      <div className="container pr-5 pl-5">
        <div className="columns">
          <div className="column is-three-fifths">
            <Card1 />
          </div>
          <div className="column">
            <Card1i />
          </div>
        </div>
        <br />
        <div className="columns">
          <div className="column is-three-fifths">
            <Grid><Card3 /></Grid>
          </div>
          <div className="column">
            <Card3i />
          </div>
        </div>
        <br />
        <div className="columns">
          <div className="column is-three-fifths">
            <Card2 />
          </div>
          <div className="column">
            <Card2i />
          </div>
        </div>
        <br /><hr className="hrDark" />
      </div>
    </Hero>
  )

}

export default Projects;