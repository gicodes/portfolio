import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Hero from "../0-hero-components/hero-kits";
import AdFlyer from "../../images/My project-1.png";

import CardX from "./cardX";
import CardXp from "./cardXp";
import CardXs from "./cardXs";
import CardXps from "./cardXps";


const Xperience = () => {

  const divider = (
    <div className='divider is-light'>
      <p className="is-size-2 nom-fonts 
        has-text-success"> Experience </p>
    </div>
  )

  return (
    <Grid container>
      <Hero>
        <div>
          {divider}
        </div>
        <br />
        <div className="columns" style={{ marginRight: '0', marginLeft: '0' }}>
          <div className="column is-half">
          </div>
          <div className="column is-half">
            <CardXps />
          </div>
        </div>
        <div className="columns" style={{ marginRight: '0', marginLeft: '0' }}>
          <div className="column is-half">
            <CardX />
          </div>
          <div className="column is-half">
          </div>
        </div>
        <div className="columns" style={{ marginRight: '0', marginLeft: '0' }}>
          <div className="column is-half">
          </div>
          <div className="column is-half">
            <CardXs />
          </div>
        </div>
        <div className="columns" style={{ marginRight: '0', marginLeft: '0' }}>
          <div className="column is-half">
            <CardXp />
          </div>
          <div className="column is-half">
          </div>
          <Grid>
          <img
            src={AdFlyer}
            alt='My portrait'
            className="image"
          />
          </Grid>
        </div>
      </Hero>
    </Grid>
  )
}


export default Xperience;