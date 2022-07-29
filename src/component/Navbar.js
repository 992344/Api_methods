import React from 'react'
import {NavLink, Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
 <ul class="nav justify-content-center">
  <li class="nav-item">
    <Link class="nav-link active" aria-current="page" to="/">Home</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link active" aria-current="page" to="/getdata">Get Data</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link active" aria-current="page" to="/getuser">Get USer</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link active" aria-current="page" to="/getdata">Get Data</Link>
  </li>
</ul>
    </div>
  )
}

export default Navbar



