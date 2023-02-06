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
        <p className="subtitle has-text-ash pt-4">December 2022 - present (Remote)</p>
      </div>
      <div className="card-content">
        <div className="is-size-5 has-text-white">
          <ul>
            <li><CheckCircle /> Developing full-stack applications to clients from anywhere in the world.</li>
            <li><CheckCircle /> Networking & collaborating with other developers to deliver large-scale apps.</li>
            <li><CheckCircle /> Applying advanced framework and stack such as ReactJs, NodeJs, NextJs, MUI, etc.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default cardXps;