import { Navigate, useParams } from "react-router-dom"
import logements from "../../../public/logements.json"
import Carousel from "../../components/Carousel/Carousel"
import Tags from "../../components/Tags/Tags"
import Collapse from "../../components/Collapse/Collapse"
import Host from "../../components/Host/Host"
import Rating from "../../components/Rating/Rating"
import "./logement.scss"

function Logement() {
  const { id } = useParams()
  const logement = logements.find((l) => l.id === id)

  if (!logement) {
    return <Navigate to="/error-404" />
  }
  return (
    <main className="logement">
      <Carousel images={logement.pictures} />
      <div className="logement__main">
        <div className="logement__content">
          <div className="logement__info">
            <h1 className="logement__title">{logement.title}</h1>
            <h3 className="logement__location">{logement.location}</h3>
          </div>
          <Tags tags={logement.tags} />
        </div>

        <div className="logement__host__rating">
          <div className="logement__host">
            <Host host={logement.host} />
          </div>
          <div className="logement__rating">
            <Rating rating={logement.rating} />
          </div>
        </div>
      </div>

      <div className="logement__collapses__content">
        <div className="logement__collapses">
          <div className="logement__description">
            <Collapse title="Description" content={[logement.description]} />
          </div>
        </div>
        <div className="logement__collapses">
          <div className="logement__equipments">
            <Collapse title="Équipements" content={logement.equipments} />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Logement
