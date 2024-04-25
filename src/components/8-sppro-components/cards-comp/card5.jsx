const Card5 = () => {
  return (
    <div className="container">
      <div className="has-text-light is-size-5">
        <p className="title has-text-white">TourCan Consultancy</p>
        <ul>
          <li>A single-page web application for study and tourist guides in Belarus.</li>
          <li>Amazing contents with beautiful user interface to serve clients in-app.</li>
          <li>This project runs on NextJs serverless functions and is managed by yours truly</li>
        </ul>
        <br />
        {/* <p className="subtitle is-size-4 has-text-ash"><b>Key Functions</b></p>
        <ul>
          <li><span className="has-text-ash"> Next Router:</span> Sub-pages are well routed to the target section on the index page </li>
          <li><span className="has-text-ash">Opt-in:</span> Users can download and fill a pdf form from the index page with react-pdf handling libraries</li>
          <li><span className="has-text-ash">Layout and UI:</span> This web app is bootstrapped with Tailwind CSS and offers a standard layout with amazing color gradients</li>
        </ul>
        <br /> */}
        <p>Source: <a href="https://github.com/gicodes/tourcan">https://github.com/gicodes/tourcan</a></p>
        <p>Web link: <a href="https://tourcan.org">https://tourcan.org</a></p>
      </div>
    </div >
  )
}

export default Card5;
