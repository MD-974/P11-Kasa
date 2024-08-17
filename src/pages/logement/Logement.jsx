import logements from '../../../public/logements.json';

function Logement() {
    return (
        <div className="logement">
            {logements.map((logement) => (
                <article key={logement.id} className="logement__article">
                    <div className="logement-container">
                        <img 
                            className="logement__image" 
                            // src={logement.pictures}  
                        />
                        Salut, le logement
                    </div>
                </article>
            ))}
        </div>
    );
}

export default Logement;