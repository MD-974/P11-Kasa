import "./nav.scss"
import { NavLink, useLocation } from "react-router-dom"

function Nav() {
  const location = useLocation()

  return (
    <ul className="nav_ul">
      <li className="nav_ul_li">
        <NavLink to="/" className={location === "/" ? "active" : null}>
          Accueil
        </NavLink>
      </li>
      <li className="nav_ul_li">
        <NavLink
          to="/about"
          className={location === "/about" ? "active" : null}
        >
          A Propos
        </NavLink>
      </li>
    </ul>
  )
}

export default Nav
