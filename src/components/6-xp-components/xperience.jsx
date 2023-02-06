import Hero from "../0-hero-components/hero-kits";
import Divider from "./divider";
import CardX from "./cardX";
import CardXp from "./cardXp";
import CardXs from "./cardXs";
import CardXps from "./cardXps";

const Xperience = () => {
  return (
    <Hero>
      <div className="container"
        style={{ marginTop: '15em' }}>
        <div className="divider is-light">
          <p className="is-size-2 
            nom-fonts has-text-success">Experience
          </p>
        </div>
        <br />
        <div className="columns pr-5 pl-5">
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
          </div>
        </div>
      </div>
    </Hero>
  )
}

export default Xperience;