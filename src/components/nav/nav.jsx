import "./nav.scss"
import { NavLink } from "react-router-dom"

function Nav() {
  return (
    <ul className="nav_ul">
      <li className="nav_ul_li">
        <NavLink to="/" activeClassName="active">
          Accueil
        </NavLink>
      </li>
      <li className="nav_ul_li">
        <NavLink to="/about" activeClassName="active">
          A Propos
        </NavLink>
      </li>
    </ul>
  )
}

export default Nav
