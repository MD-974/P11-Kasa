import './cards.scss';
function Cards() {
        const articles = Array(20).fill(null).map((_, index) => (
        <article key={index} className='cards__article'>
            <p className='cards__article--title'>Appartement cosy</p>
        </article>
    ));

    return (
        <div className='cards'>
            {articles}
        </div>
    )
}

export default Cards