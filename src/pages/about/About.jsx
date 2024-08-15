import Banner from "../../components/banner/Banner"
function About () {
    return (
        <main className="main">
            <Banner 
            image="/src/assets/img-about.png"
            alt="image de la mer avec une montagne"
            brightness={0.7} // Applique 30% de luminosité 
            />
        </main>
    )
}

export default About