import './cards.scss';
import logements from '../../../public/logements.json';
// function Cards() {

//         const articles = Array(20).fill(null).map((_, index) => (
//         <article key={index} className='cards__article'>
//             <p className='cards__article--title'>{logement.title}</p>
//         </article>
//     ));

//     return (
//         <div className='cards'>
//             {articles}
//         </div>
//     )
// }

// export default Cards


function Cards () {
    return (
        <div className='cards'>
            {logements.map((logement) => (
                <article key={logement.id} className='cards__article'>
                    <div className='cards__image-container'>
                        <img 
                            className='cards__image' 
                            src={logement.cover} 
                            alt={logement.title} 
                        />
                        <div className='cards__overlay'>
                            <p className='cards__title'>{logement.title}</p>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
}

export default Cards