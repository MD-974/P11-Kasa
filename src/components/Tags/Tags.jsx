/* eslint-disable react/prop-types */
import "./tags.scss"

function TagList({ tags }) {
  return (
    <div className="logement__tag">
      {tags.map((tag, index) => (
        <div key={index} className="tag">
          <div className="tag__text">{tag}</div>
        </div>
      ))}
    </div>
  )
}

export default TagList
