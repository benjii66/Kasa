import React, { useState } from "react";
import Chevron from "../../assets/images/vectorBas.svg";
import "../../assets/styles/Collapse.css"


export const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggleCollapse}>
        {title}
        <span className={`chevron ${isOpen ? "rotated" : ""}`}>
          <img src={Chevron} alt="chevron" />
        </span>
      </div>
      {isOpen && <div className="collapse-content">{content}</div>}
    </div>
  );
};


