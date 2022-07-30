import React from 'react'
import {NavLink, Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
 <ul class="nav justify-content-center">
  <li class="nav-item">
    <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link active" aria-current="page" to="/getdata">Get Data</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link active" aria-current="page" to="/getuser">Get USer</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link active" aria-current="page" to="/create">Create User</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link active" aria-current="page" to="/readdata">Read data</Link>
    
  </li>
  <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Hook concept
          </a>
         
          <ul class="dropdown-menu">
            <li>
            <NavLink class="dropdown-item" to="/usestate">useSatate</NavLink>
            </li>
            <li><a class="dropdown-item" href="#">UseEffect</a></li>
            <li><a class="dropdown-item" href="#">useReducer</a></li>
          </ul>
          </li>
</ul>
    </div>
  )
}

export default Navbar



