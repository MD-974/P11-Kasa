import logements from '../../../public/logements.json';

import './logement.scss';

function Logement() {
    return (
        <div className="logement">
            <div>
                <img src={logements[0].cover} alt="image du logement"/></div>
            <div>
                <h1>{logements[0].title}</h1>
                <p>{logements[0].location}</p>
            </div>
        </div>
    );
}

export default Logement;