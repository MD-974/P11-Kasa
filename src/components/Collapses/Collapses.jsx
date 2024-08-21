// import { useState } from 'react';
// import collapses from "../../../public/collapses.json";
// import './collapses.scss';

// function Collapses() {
//     // Utilise un objet pour garder la trace de l'état d'ouverture de chaque collapse
//     const [openCollapses, setOpenCollapses] = useState({});

//     const handleToggleCollapse = (collapseId) => {
//         setOpenCollapses((prevOpenCollapses) => ({
//          // Copie l'état précédent et inverse l'état de ce collapse spécifique
//         ...prevOpenCollapses,
//         [collapseId]: !prevOpenCollapses[collapseId],
//     }));
// };

//     return (
//         <div className="collapses">
//             {collapses.map((collapse) => (
//             <div key={collapse.id} className="collapse-item">
//                {/* Titre du collapse cliquable */}
//                 <div className="collapse-title" onClick={() => handleToggleCollapse(collapse.id)}>
//                     <h3>{collapse.title}</h3>
//                   {/* SVG avec rotation conditionnelle */}
//                     <svg 
//                         width="25" 
//                         height="14" 
//                         viewBox="0 0 25 14" 
//                         fill="none" 
//                         xmlns="http://www.w3.org/2000/svg"
//                         style={{ transform: openCollapses[collapse.id] ? 'rotate(-180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}>
//                         <path d="M11.2897 0.789661C11.9591 0.120242 13.0462 0.120242 13.7157 0.789661L23.9979 11.0719C24.6674 11.7414 24.6674 12.8285 23.9979 13.4979C23.3285 14.1673 22.2414 14.1673 21.572 13.4979L12.5 4.42595L3.42804 13.4926C2.75862 14.162 1.67148 14.162 1.00206 13.4926C0.332646 12.8231 0.332646 11.736 1.00206 11.0666L11.2843 0.784306L11.2897 0.789661Z" fill="white"/>
//                     </svg>
//                 </div>
//                 {/* Contenu du collapse affiché uniquement si ouvert */}
//                 {openCollapses[collapse.id] && (
//                 <p className="collapse-text">{collapse.content}</p>
//                 )}
//             </div>
//             ))}
//         </div>
//     );
// }

// export default Collapses;