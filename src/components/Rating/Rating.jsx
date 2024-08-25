/* eslint-disable react/prop-types */
import "./rating.scss"

// Import des fichiers SVG
import starActive from "../../assets/star-active.svg"
import starInactive from "../../assets/star-inactive.svg"

const Rating = ({ rating }) => {
  const stars = []
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(
        <img src={starActive} alt="Star active" key={i} className="star" />
      )
    } else {
      stars.push(
        <img src={starInactive} alt="Star inactive" key={i} className="star" />
      )
    }
  }

  return <div className="rating">{stars}</div>
}

export default Rating
