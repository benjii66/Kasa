import React, { useState } from "react";
import Chevron from "../../assets/images/vectorBas.svg";
import "../../assets/styles/Collapse.css"

//Collapse will display/mask the content
export const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  //methods to setup the open/close content
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      {/* header with the title and the chevron */}
      <div className="collapse-header" onClick={toggleCollapse}>
        {title}
        {/* rotatable Chevron  */}
        <span className={`chevron ${isOpen ? "rotated" : ""}`}>
          <img src={Chevron} alt="chevron" aria-label="Carrousel chevron"/>
        </span>
      </div>
      {/* display content if isOpen  */}
      {isOpen && <div className="collapse-content">{content}</div>}
    </div>
  );
};


