import CheckCircle from "../0-hero-components/check-kits";

const cardXy = () => {
  return (
    <div
      className="box container"
      style={{
        elevation: '16',
        backgroundColor: '#404045',
      }}>
      <div className="card-content">
        <h2 className="title has-text-white">
          Front-end Engineer @<a
            href='https://dev.edtify.com'
            className="has-text-success">Edtify
          </a>
        </h2>
        <p className="subtitle has-text-ash pt-4">August 2023 - Present (Remote, Nigeria)</p>
      </div>
      <div className="card-content">
        <div className="is-size-5 has-text-white">
          <ul>
            <li><CheckCircle /> I create themes according to company specifications and guidelines provided.</li>
            <li><CheckCircle /> I collaborate with product designers in the team to develop user friendly applications.</li>
            <li><CheckCircle /> I write clean and scalable codes that can be used by other developers as a template for web applications.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default cardXy;