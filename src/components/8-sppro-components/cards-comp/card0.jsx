const Card1 = () => {
  return (
    <div className="container">
      <div className="has-text-light is-size-5">
        <p className="title has-text-white">Afro Fashion</p>
        <ul>
          <li>An online fashion store application that connects sellers to buyers.</li>
          <li>Complete e-commerce features with google auth and Flutterwave payment.</li>
          <li>Afro Fashion runs on React + NodeJS (CORS enabled), and is bootstrapped with Firebase, Google-Auth, React-Bootstrap and Flutterwave-v3</li>
         </ul>
        <br />
        {/* <p className="subtitle is-size-4 has-text-ash"><b>Key Functions</b></p>
        <ul>
          <li><span className="has-text-ash">React Web Routing:</span> Every click is well routed and responsive </li>
          <li><span className="has-text-ash">User Authentication:</span> Sign up and sign in with google or email provider</li>
          <li><span className="has-text-ash">Contexts:</span> Users, Cart, Products, etc are managed with top-level context providers</li>
          <li><span className="has-text-ash">Seamless payment:</span> e-payments don't come any easier. Flutterwave api integration handles payments</li>
        </ul>
        <br /> */}
        <p>Source: <a href="https://github.com/gicodes/afro-fashion">https://github.com/gicodes/afro-fashion</a> </p>
        <p>Web link: <a href="https://afrofashion.site">https://afrofashion.site</a></p>
      </div>
    </div >
  )
}

export default Card1;