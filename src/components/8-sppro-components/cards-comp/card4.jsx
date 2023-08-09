const Card4 = () => {
  return (
    <div className="container">
      <div className="has-text-light is-size-5">
        <p className="title has-text-success">Ryder-GP</p>
        <ul>
          <li>Ryder-GP is a free NEXT service built to bring solution to business logistics and security.</li>
          <li>Clients are connected to real-time geo-based application, making it simple to send and receive location data.</li>
          <li>This Project is open-source and constantly in development. It is currently open to contributions, partnerships or sponsorship</li>
          <li>Ryder-GP is built on Nextjs using Typescript for server and client-side protocols and is bootstrapped with Google Map, Socket.io, Chakra-UI, Tailwind CSS and other third-party APIs.</li>
        </ul>
        <br />
        <p className="subtitle is-size-4 has-text-ash"><b>Key Functions</b></p>
        <ul>
          <li>Next-Auth: This application uses next-auth for it's user authentication process</li>
          <li>Interactivity: Clients are connected globally, making for seemless communication</li>        
          <li>Google Map: Ryder's location data is dynamically parsed and displayed on Google Map.</li>
          <li>User Information: Information and data are securely collected and stored by MongoDB Atlas.</li>  
          <li>Serverless Functions: Ryder-GP runs on serverless functions which mean network connections are safe and fast.</li>
        </ul><br/>      
        <span><b>Source:</b> <a href="https://github.com/gicodes/ryder.gps">github.com/gicodes/ryder.gps</a></span>
        <br/>
        <span><b>Web-link:</b> <a href="https://rydergp.vercel.app">rydergp.app</a></span>
      </div>
    </div>
  )
}

export default Card4;