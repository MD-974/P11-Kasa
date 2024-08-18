// import logements from '../../../public/logements.json';


// import './logement.scss';


// function Logement() {
//     const logement = logements;
//     return (
//         <main className="logement">
//             <div className="logement__carousel">
//                 carousel
//             </div>
//             <div>
//                 <h1 className='logement__title'>{logement.title}</h1>
//                 <div className='logement__location'>
//                     <p>{logement.location}</p>
//                 </div>
//             </div>
//         </main>
//     );
// }

// export default Logement;

import { useParams } from 'react-router-dom';
import logements from '../../../public/logements.json';
import './logement.scss';

function Logement() {
    const { id } = useParams();  // Récupère l'ID de la route
    const logement = logements.find(l => l.id === id);  // Trouve le logement correspondant à l'ID

    return (
        <main className="logement">
            <div className="logement__carousel">
                carousel
            </div>
            <div className='logement__info'>
                <h1 className='logement__title'>{logement.title}</h1>
                <div className='logement__location'>
                    <p>{logement.location}</p>
                </div>
            </div>
        </main>
    );
}

export default Logement;
