// import './nav.scss'

// import { Link } from 'react-router-dom'

// function Nav () {
//     return (
//         <ul className="nav_ul">
//             <li className="nav_ul_li">
//                 <Link to="/">Acceuil</Link>
//             </li>
//             <li className="nav_ul_li">
//                 <Link to="/about">A Propos</Link>
//             </li>
//         </ul>
//     )
// }

// export default Nav

import './nav.scss';
import { NavLink } from 'react-router-dom';

function Nav () {
    return (
        <ul className="nav_ul">
            <li className="nav_ul_li">
                <NavLink exact to="/" activeClassName="active">Accueil</NavLink>
            </li>
            <li className="nav_ul_li">
                <NavLink to="/about" activeClassName="active">A Propos</NavLink>
            </li>
        </ul>
    )
}

export default Nav;