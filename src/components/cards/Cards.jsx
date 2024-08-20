import logements from '../../../public/logements.json';
import './cards.scss';
import { Link  } from 'react-router-dom';
function Cards() {
    return (
        <div className='cards'>
            {logements.map((logement) => (
                <article key={logement.id} className='cards__article'>
                    <div className='cards__image-container'>
                        <Link 
                            to={{ pathname: `/logement/${logement.id}` }}
                            state={{ logement }}
                            className='cards__link'
                        >
                            <img 
                                className='cards__image' 
                                src={logement.cover} 
                                alt={logement.title} 
                            />
                            <div className='cards__overlay'>
                                <p className='cards__title'>{logement.title}</p>
                            </div>
                        </Link>
                    </div>
                </article>
            ))}
        </div>
    );
}

export default Cards;