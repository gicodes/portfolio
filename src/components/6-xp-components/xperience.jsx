import Hero from "../0-hero-components/hero-kits";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import AdFlyer from "../../images/adsFlyer.png"
import Divider from "./divider";
import CardXy from "./cardXy"; // Edtify
import CardX from "./cardX"; // Footy
// import CardXp from "./cardXp"; // Select
// import CardXs from "./cardXs"; // Tard
import CardXps from "./cardXps"; // Fiverr

const Xperience = () => {

  const divider = (
    <div className='divider is-light'>
      <p className="is-size-2 nom-fonts 
        has-text-success"> Experience </p>
    </div>
  )

  return (
    <Grid>
      <Hero>
        <div className="container pr-5 pl-5">
          <div>
            {divider}
          </div>

          <br />
          <div className="columns">
            <div className="column is-half">
              <CardXy />
            </div>
            <Divider />
            <div className="column is-half">
            </div>
          </div>
          <div className="columns">
            <div className="column is-half">
            </div>
            <Divider />
            <div className="column is-half">
              <CardXps />
            </div>
          </div>
          <div className="columns">
            <div className="column is-half">
              <CardX />
            </div>
            <Divider />
            <div className="column is-half">
            </div>
          </div>
          <div className="columns">
            <div className="column is-half">
            </div>
            <Divider />
            <div className="column is-half">
              {/* <CardXs /> */}
            </div>
          </div>
          <div className="columns">
            <div className="column is-half">
              {/* <CardXp /> */}
            </div>
            <Divider />
            <div className="column is-half">
              <Grid 
              style={{
                marginTop: "2em",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end"
              }}
              >
                <img
                  style={{
                    height: '550px',
                  }}
                  src={AdFlyer}
                  alt='Ad Flyer'
                  className="image"
                />
              </Grid>
            </div>
          </div>
        </div>
      </Hero>
    </Grid>
  )
}


export default Xperience;