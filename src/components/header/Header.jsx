import Nav from "../nav/nav"
import "./header.scss"

function Header() {
  return (
    <header className="header">
      <img src="/src/assets/logo-red.svg" className="logo__red" alt="logo" />
      <Nav />
    </header>
  )
}

export default Header
