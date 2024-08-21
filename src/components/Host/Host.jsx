/* eslint-disable react/prop-types */
import "./host.scss"

function Host({ host }) {
  if (!host) {
    return <p>Vendeur non trouvé</p>
  }
  const { name, picture } = host

  return (
    <div className="host">
      <div className="host__name">
        {name.split(" ")[0]}
        <br />
        {name.split(" ")[1]}
      </div>
      <img className="host__picture" src={picture} alt={"photo de " + name} />
    </div>
  )
}

export default Host
