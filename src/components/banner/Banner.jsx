/* eslint-disable react/prop-types */
import './banner.scss';

function Banner (props) {
    const { image, label, brightness = 1 } = props
    return (
        <div className="banner">
            { label && <p className="banner__title">{label}</p> }
            <img className="banner__img" 
            src={image} 
            alt="image de la mer avec une montagne"
            style={{ filter: `brightness(${brightness})` }} 
            />
        </div>
    )
}

export default Banner