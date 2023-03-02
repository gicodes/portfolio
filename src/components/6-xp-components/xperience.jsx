import Hero from "../0-hero-components/hero-kits";

import AdFlyer from "../../images/My project-1.png"
import Divider from "./divider";
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
    <Hero>
      <div className="container pr-5 pl-5">
        <div>
          {divider}
        </div>

        <br />

        <div className="columns">
          <div className="column is-half">
          </div>
          <Divider />
          <div className="column is-half">
            <CardX />
          </div>
        </div>
        <div className="columns">
          <div className="column is-half">
            <CardXps />
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
            <CardXs />
          </div>
        </div>
        <div className="columns">
          <div className="column is-half">
            <CardXp />
          </div>
          <Divider />
          <div className="column is-half">
            <div>
              <img
                style={{
                  height: '550px',
                }}
                src={AdFlyer}
                alt='Ad Flyer'
                className="image"
              />
            </div>
          </div>
        </div>
      </div>
    </Hero>
  )
}


export default Xperience;