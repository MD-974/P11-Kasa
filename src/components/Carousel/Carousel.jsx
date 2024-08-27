/* eslint-disable react/prop-types */
import { useState } from "react"
import "./Carousel.scss"

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  if (images.length === 0) {
    return <div className="carousel__empty">Aucune image disponible</div>
  }

  return (
    <div className="logement__carousel">
      <img
        className="carousel__image"
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
      />
      <div className="carousel__navigation">
        <svg
          className="carousel__prev"
          onClick={handlePrev}
          xmlns="http://www.w3.org/2000/svg"
          height="80"
          width="47"
          viewBox="0 0 320 512"
        >
          <path
            fill="white"
            d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
          />
        </svg>

        <svg
          className="carousel__next"
          onClick={handleNext}
          xmlns="http://www.w3.org/2000/svg"
          height="80"
          width="47"
          viewBox="0 0 320 512"
        >
          <path
            fill="white"
            d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
          />
        </svg>
      </div>
      <div className="carousel__counter">
        {currentIndex + 1}/{images.length}
      </div>
    </div>
  )
}

export default Carousel
