import Banner from "../../components/banner/Banner"
import Collapse from "../../components/Collapse/Collapse"
import collapses from "../../../public/collapses.json"

function About() {
  return (
    <main className="main">
      <Banner image="/src/assets/img-about.png" />
      {collapses.map((collapse) => (
        <div key={collapse.id} className="collapse">
          <Collapse content={[collapse.content]} title={collapse.title} />
        </div>
      ))}
    </main>
  )
}

export default About
