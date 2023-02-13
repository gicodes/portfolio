import CheckCircle from "../0-hero-components/check-kits";

const cardX = () => {
  return (
    <div
      className="box container"
      style={{
        elevation: '16',
        backgroundColor: '#404045',
      }}>
      <div className="card-content">
        <h2 className="title has-text-white">
          Software Engineer @<a
            href='https://instagram.com/footytoolnaija'
            className="has-text-success">FootyTool Naija
          </a>
        </h2>
        <p className="subtitle has-text-ash pt-4">March 2022 - present (Remote, start-up)</p>
      </div>
      <div className="card-content">
        <div className="is-size-5 has-text-white">
          <ul>
            <li><CheckCircle /> Designing user interfaces and interaction (UI).</li>
            <li><CheckCircle /> Building SPAs that can be available to end users.</li>
            <li><CheckCircle /> Maintaining software and managing the website.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default cardX;