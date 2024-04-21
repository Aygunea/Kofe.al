// import React, { useState } from 'react';
// import './collapse.css'; // Stil dosyası

// function Collapse({ headerText, contentText }) {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleCollapse = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="collapse">
//       <div className="collapse-header" onClick={toggleCollapse}>
//         {headerText}
//       </div>
//       {isOpen && (
//         <div className="collapse-content">
//           {contentText}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Collapse;
import React, { useState } from 'react';
import './collapse.css'; // Stil dosyası

function Collapse({ headerText, contentText }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggleCollapse}>
        {headerText}
      </div>
      <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
        {contentText}
      </div>
    </div>
  );
}

export default Collapse;
