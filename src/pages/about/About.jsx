import Banner from "../../components/banner/Banner"
import Collapses from "../../components/Collapses/Collapses"
function About () {
    return (
        <main className="main">
            <Banner 
            image="/src/assets/img-about.png"
            brightness={0.7} // Applique 30% de luminosité 
            />
            <Collapses />
        </main>
    )
}

export default About