const Card4 = () => {
  return (
    <div className="container">
      <div className="has-text-light is-size-5">
        <p className="title has-text-white">Ryder-GP</p>
        <ul>
          <li>Ryder-GP is a free NEXT service built to bring solution to business logistics.</li>
          <li>This is an open-source project, constantly in development and currently open to contributions and sponsorship..</li>
          <li>Ryder-GP runs on NextJS (serverless), written with Typescript on the front-end and the back-end and is bootstrapped with Google-map, Socket.io, Chakra-UI, Tailwind CSS and other third-party APIs.</li>
        </ul>
        <br />
        {/* <p className="subtitle is-size-4 has-text-ash"><b>Key Functions</b></p>
        <ul>
          <li><span className="has-text-ash">Next-Auth</span>: This application uses next-auth for it's user authentication process</li>
          <li><span className="has-text-ash">Interactivity</span>: Clients are connected real-time, allowing seemless communication</li>        
          <li><span className="has-text-ash">Google Map</span>: Riders location data is shared and rendered with Google Map.</li>
          <li><span className="has-text-ash">Serverless Functions</span>: Ryder-GP runs a serverless API which mean server operations are fast and seamless.</li>
        </ul>
        <br/> */}
        <p>Source: <a href="https://github.com/gicodes/ryder.gps">https://github.com/gicodes/ryder.gps</a></p>
        <p>Web-link: <a href="https://rydergp.vercel.app">https://rydergp.vercel.app</a></p>
      </div>
    </div>
  )
}

export default Card4;