import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <div className="row">
      <div className="col-12 col-md-12">
        <ul className="nav nav-pills nav-fill">
          <li className="nav-item"><Link className="nav-link" to='/'>Home</Link></li>
          <li className="nav-item"><Link to='/signin'>Sign In</Link></li>
          <li className="nav-item"><Link to='/signup'>Sign Up</Link></li>
          <li className="nav-item"><Link to='/roster'>Roster</Link></li>
          <li className="nav-item"><Link to='/schedule'>Schedule</Link></li>
        </ul>
      </div>
    </div>
  </header>
)

export default Header
