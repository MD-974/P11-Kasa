import { Link } from "react-router-dom"
import './error.scss'

function Error () {
    return (
        <main className="error404">
            <h1 className="error404__title">404</h1>
            <h2 className="error404__text">Oups! La page que vous demandez n existe pas.</h2>
            <Link className="error404__link" to="/">Retourner sur la page d accueil</Link >
        </main>
    )
}

export default Error