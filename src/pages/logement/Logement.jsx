import { useParams } from 'react-router-dom';
import logements from '../../../public/logements.json';
import './logement.scss';

function Logement() {
    const { id } = useParams();  // Récupère l'ID de la route
    const logement = logements.find(l => l.id === id);  // Trouve le logement correspondant à l'ID

    // Vérifie si le logement existe
    if (!logement) {
        return <div>Logement non trouvé</div>;
    }

    return (
        <main className="logement">
            <div className="logement__carousel">
                carousel
            </div>
                <h1 className='logement__title'>
                    {logement.title}
                </h1>
                <div className='logement__location'>
                    <p>{logement.location}</p>
                </div>
                <div className='logement__host'>
                    <p></p>

            </div>
        </main>
    );
}

export default Logement;