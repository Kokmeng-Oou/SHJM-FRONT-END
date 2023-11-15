import { NavLink } from 'react-router-dom'
import React from 'react'
import Navigation from '../../config/Navigation'

function Navbar(): React.JSX.Element {
  return (
    <div className="navbar mx-auto px-8 container">
      <div className="navbar-start">
        <NavLink to="/" className="font-bold text-2xl">
          {Navigation[0]?.logo.name}
        </NavLink>
      </div>
      {/* Navigation center*/}
      {/* Navigation end*/}
      {/* <div className="navbar-end">
          <NavLink to="/" className="btn btn-info mr-4">
            {Navigation[0]?.sideNavigation[1]?.name}
          </NavLink>
          <NavLink to="/" className="btn btn-info">
            {Navigation[0]?.sideNavigation[0]?.name}
          </NavLink>
        </div> */}
    </div>
  )
}
export default Navbar
