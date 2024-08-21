import Banner from "../../components/banner/Banner";
// import Collapses from "../../components/Collapses/Collapses";
import Collapse from "../../components/Collapse/Collapse";
import collapses from "../../../public/collapses.json";

import "./about.scss";


function About() {
    return (
        <main className="main">
            <Banner image="/src/assets/img-about.png" />
            {
                collapses.map((collapse) => (
                    <div key={collapse.id} className="collapse">
                        <Collapse content={collapse.content} title={collapse.title} />
                    </div>
                ))
            }
        </main>
    );
}

export default About;