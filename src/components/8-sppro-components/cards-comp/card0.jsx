const Card1 = () => {
  return (
    <div className="container">
      <div className="has-text-light is-size-5">
        <p className="title has-text-success"> Afro Fashion</p>
        <ul>
          <li>A complex shopify application built with React and Node JS.</li>
          <li>Complete e-commerce features with google auth and Stripe payment.</li>
          <li>Database and Cloud storage is securely connected to Firebase/ firestore.</li>
        </ul>
        <br />
        <p className="subtitle is-size-4 has-text-ash"><b>Key Functions</b></p>
        <ul>
          <li>React Web Routing: Every click is well routed and responsive </li>
          <li>User Authentication: Sign up and sign in with google or email provider</li>
          <li>Users Repository: User data is stored in non-SQL but structured environment </li>
          <li>Carts Repository: Cart handler is designed to receive and store data with context</li>
          <li>Stripe Payment: Online payments don't come any easier. Stripe integration boosts payments</li>
        </ul>
      </div>
    </div >
  )
}

export default Card1;