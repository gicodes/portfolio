const Card1 = () => {
  return (
    <div className="container">
      <div className="has-text-light is-size-5">
        <p className="title has-text-success"> Bale Factory</p>
        <ul>
          <li>A simple e-commerce application built on Express-Js framework.</li>
          <li>Users can interact with products, add items to their carts and proceed to pay.</li>
          <li>Authentication and validation is simple, swift and secure when signing up or logging in.</li>
        </ul>
        <br />
        <p className="subtitle is-size-4 has-text-ash"><b>Key Functions</b></p>
        <ul>
          <li>Express Web Routing: Every click is well routed and responsive </li>
          <li>User Authentication: Sign up and sign in made easy with cookie-session</li>
          <li>Users Repository: User details are stored in a close and secure environment</li>
          <li>Carts Repository: Cart handler is designed to receive and store data by caching</li>
          <li>Admin function: Admin can be created as a user account to create, edit and delete products</li>
        </ul><br/>
        <span><b>Source:</b> <a href="https://github.com/gicodes/bale-factory">github.com/gicodes/bale-factory</a></span>
      </div>
    </div >
  )
}

export default Card1;