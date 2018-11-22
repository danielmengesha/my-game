import React from "react";
import {Link} from 'react-router-dom'




const Navbar = () => {
  const navItems = ['Home', 'About', 'Contact', 'Login']
  return( 
    
      <nav className="nav">
        <div className="nav">
          <ul className="nav">
            {navItems.map((item) => {
              return <li >
                        <Link className="nav-link" to={item}>{item}</Link>
                     </li>
            })}
          </ul>
        </div>    
      </nav>
   
  )
}

export default Navbar
