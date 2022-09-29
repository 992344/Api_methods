import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { UserContext } from "../App";
const Navbar = () => {
  const user=useContext(UserContext);
  return (
    <div style={{ backgroundColor: "lightskyblue" }}>
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/home">
            Home
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/getdata">
            Get Data
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/getuser">
            Get USer
          </Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/readdata">
            user details   
          </Link>
        </li>

        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Hook concept
          </a>

          <ul class="dropdown-menu">
            <li>
              <NavLink class="dropdown-item" to="/usestate">
                useSatate
              </NavLink>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                UseEffect
              </a>
            </li>
            <li>
              <NavLink class="dropdown-item" to="/useref">
                UseRef
              </NavLink>
            </li>
          </ul>
        </li>

        <li class="nav-item" style={{ paddingLeft: 110 }}>
          <Link class="nav-link active" aria-current="page" to="/create">
            Sign Up
          </Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/login">
            User <span>{user}</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
