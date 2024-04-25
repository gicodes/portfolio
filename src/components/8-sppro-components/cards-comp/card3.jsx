const Card3 = () => {
  return (
    <div className="container">
      <div className="has-text-light is-size-5">
        <p className="title has-text-white">StarForge Worldwide</p>
        <ul>
          <li>StarForge is a client-side only application service for Athelete management.</li>
          <li>This project provides solutions that go beyond traditional sporting activities.</li>
          <li>StarForge is built on NextJS + Typescript and is bootstrapped with Tailwind CSS.</li>
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
        <p>Source: <a href="https://github.com/gicodes/starforge">https://github.com/gicodes/starforge</a></p>
        <p>Web-link: <a href="/">https://starforgeworldwide.org</a></p>
      </div>
    </div>
  )
}

export default Card3;