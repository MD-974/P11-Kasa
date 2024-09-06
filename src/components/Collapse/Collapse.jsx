/* eslint-disable react/prop-types */
import { useRef, useState } from "react"
import "./collapse.scss"

function Collapse({ content, title }) {
  const collapseContentRef = useRef()
  const [open, setOpen] = useState(false)

  return (
    <div className="collapse-item">
      {/* Titre du collapse cliquable */}
      <div className="collapse-title" onClick={() => setOpen(!open)}>
        <h3 className="collapse-title__text">{title}</h3>
        {/* SVG avec rotation conditionnelle */}
        <svg
          className="collapse-svg"
          width="25"
          height="14"
          viewBox="0 0 25 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            transform: open ? "rotate(-180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        >
          <path
            d="M11.2897 0.789661C11.9591 0.120242 13.0462 0.120242 13.7157 0.789661L23.9979 11.0719C24.6674 11.7414 24.6674 12.8285 23.9979 13.4979C23.3285 14.1673 22.2414 14.1673 21.572 13.4979L12.5 4.42595L3.42804 13.4926C2.75862 14.162 1.67148 14.162 1.00206 13.4926C0.332646 12.8231 0.332646 11.736 1.00206 11.0666L11.2843 0.784306L11.2897 0.789661Z"
            fill="white"
          />
        </svg>
      </div>
      {/* Contenu du collapse affiché uniquement si ouvert */}
      <div
        className="collapse-text"
        ref={collapseContentRef}
        style={
          open
            ? { height: collapseContentRef.current.scrollHeight + "px" }
            : { height: "0px", padding: "0px" }
        }
      >
        {content.length === 1 ? (
          // Si le contenu est unique, on l'affiche directement
          <p>{content[0]}</p>
        ) : (
          // Sinon, on affiche une liste
          <ul>
            {content.map((item, index) => (
              // On affiche une liste d'items
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Collapse
