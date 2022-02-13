import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <NavLink to="/movies" exact>
        Movies
      </NavLink>
      <NavLink to="/directors" exact>
        Directors
      </NavLink>
      <NavLink to="/actors" exact>
        Actors
      </NavLink>
      <NavLink to="/">
        Home
      </NavLink>
    </div>
  )
}

export default NavBar;


