import CheckCircle from "../0-hero-components/check-kits";

const cardXp = () => {
  return (
    <div
      className="box container"
      style={{
        elevation: '16',
        backgroundColor: '#404045',
      }}>
      <div className="card-content">
        <h2 className="title has-text-white">
          Co-Founder @<a
            href="https://instagram.com/selectengineeringng"
            className="has-text-success">Select Engineering
          </a>
        </h2>
        <p className="subtitle has-text-ash pt-4">December 2021 - present (Remote, start-up)</p>
      </div>
      <div className="card-content">
        <div className="is-size-5 has-text-white">
          <ul>
            <li><CheckCircle /> Identifying the ideal products with help from project managers and creative thinkers within the team. </li>
            <li><CheckCircle /> Documentations and code compiling to improve performance and reduce system load for other developers.</li>
            <li><CheckCircle /> Collaborations and freelancing to source for opportuinities or to out-source jobs in agile environments.</li>
            <li><CheckCircle /> Developing, deploying and maintaining responsive, scalable web or mobile applications for clients from anywhere in the world.</li>
            <li><CheckCircle /> Conservative customer relations to help understand the requirements and demand of our clients or the current market.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default cardXp;