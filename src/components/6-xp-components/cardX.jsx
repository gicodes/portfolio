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
          Javascript Dev. @<a
            href='https://instagram.com/footytoolnaija'
            className="has-text-success">FootyTool Naija
          </a>
        </h2>
        <p className="subtitle has-text-ash pt-4">August 2021 - September 2022 (Lagos)</p>
      </div>
      <div className="card-content">
        <div className="is-size-5 has-text-white">
          <ul>
            <li><CheckCircle /> I was responsible for building SPAs with HTML5, CSS libraries, Express + JS (ES6).</li>
            <li><CheckCircle /> I collaborated with other developers in building full-stack applications.</li>
            <li><CheckCircle /> I maintained user interface, backend APIs and updated app data in JSON.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default cardX;