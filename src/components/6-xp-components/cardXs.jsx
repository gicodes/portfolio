import CheckCircle from "../0-hero-components/check-kits";

const cardXs = () => {
  return (
    <div
      className="box container"
      style={{
        elevation: '16',
        backgroundColor: '#404045',
      }}>
      <div className="card-content">
        <h2 className="title has-text-white">
          Technical Engineer @<a
            href="https://ng.linkedin.com/in/tard-engineering-limited-185531184"
            className="has-text-success">TARD Engineering</a>
        </h2>
        <p className="subtitle has-text-ash pt-4">June 2018 - January 2020 (On-site: Lagos, Nigeria)</p>
      </div>
      <div className="card-content">
        <div className="is-size-4 has-text-white">
          <ul>
            <li><CheckCircle /> Troubleshooted and resolved technical issues that came up, often worked with client data or device during maintenance.</li>
            <li><CheckCircle /> Accepted work requests, stored records and regularly updated key reports by documentation and mailing management.</li>
            <li><CheckCircle /> Established customer relation and improved client satisfaction, which later had me promoted to a new department.</li>
            <li><CheckCircle /> Co-headed a new department based on increased demand and accelerated enagagement with new products.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default cardXs;