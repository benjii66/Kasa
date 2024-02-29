import React, { useState } from "react";
import Chevron from "../../assets/images/vectorBas.svg";

//Collapse will display/mask the content
export const Collapse = (props) => {

  //destructuring the properties for a better readability
  const {title, content} = props;
  //state to follow the open/close status
  const [isOpen, setIsOpen] = useState(false);

  //methods to setup the open/close content
  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    <div className={`collapse ${isOpen ? "collapse__visible" : ""}`}>
      {/* header with the title and the chevron */}
      <div className="collapse-header" onClick={toggleCollapse}>
        {title}
        {/* rotatable Chevron  */}
        <span className={`chevron ${isOpen ? "rotated" : ""}`}>
          <img src={Chevron} alt="chevron" aria-label="Carrousel chevron"/>
        </span>
      </div>
      {/* display content if isOpen  */}
      {isOpen && <div className={`collapse-content ${!isOpen ? "collapse__hidden" : ""}`}>{content}</div>}
    </div>
  );
};