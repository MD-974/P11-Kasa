// import BodyApp from "../../components/body/BodyApp"
import Banner from "../../components/banner/Banner"
import Cards from "../../components/cards/Cards"
function Home() {
    // return (
    //     <>
    //         <BodyApp />
    //     </>
    // )
    return (
        <main className="main">
            <Banner 
            image="/src/assets/img-home.png" 
            label="Chez vous, partout et ailleurs" 
            />
        <Cards />
    </main>
    )
}

export default Home