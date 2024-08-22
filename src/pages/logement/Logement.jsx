import { useParams } from "react-router-dom"
import logements from "../../../public/logements.json"
import Carousel from "../../components/Carousel/Carousel"
import Collapse from "../../components/Collapse/Collapse"
import Host from "../../components/Host/Host"
import "./logement.scss"

function Logement() {
  const { id } = useParams()
  const logement = logements.find((l) => l.id === id)

  return (
    <main className="logement">
      <Carousel images={logement.pictures} />
      <div className="logement__content">
        <div className="logement__info">
          <h1 className="logement__title">{logement.title}</h1>
          <h3 className="logement__location">{logement.location}</h3>
        </div>

        <div className="logement__host">
          <Host host={logement.host} />
        </div>
      </div>
      <div className="logement__tags__rating">
        <div className="logement__tags">tags</div>
        <div className="logement__rating">rating</div>
      </div>
      <div className="logement__collapses__content">
        <div className="logement__collapses">
          <div className="logement__description">
            <Collapse title="Description" content={logement.description} />
          </div>
        </div>
        <div className="logement__collapses">
          <div className="logement__equipments">
            <Collapse
              title="Équipements"
              content={
                <ul className="logement__equipments_ul">
                  {logement.equipments.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              }
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Logement
