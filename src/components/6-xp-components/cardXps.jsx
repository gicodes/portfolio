import CheckCircle from "../0-hero-components/check-kits";

const cardXps = () => {
  return (
    <div
      className="box container"
      style={{
        elevation: '16',
        backgroundColor: '#404045',
      }}>
      <div className="card-content">
        <h2 className="title has-text-white">
          Full-Stack Developer @<a
            href="https://fiverr.com/gi_codes"
            className="has-text-success">Fiverr
          </a>
        </h2>
        <p className="subtitle has-text-ash pt-4">September 2022 - April 2023 (Remote)</p>
      </div>
      <div className="card-content">
        <div className="is-size-5 has-text-white">
          <ul>
            <li><CheckCircle /> I developed full-stack react applications to clients from anywhere in the world.</li>
            <li><CheckCircle /> I completed task beyond my stack leveraging advanced tools such as Chat-GPT</li>
            <li><CheckCircle /> I contributed to open-source projects and non-paying start-up projects</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default cardXps;