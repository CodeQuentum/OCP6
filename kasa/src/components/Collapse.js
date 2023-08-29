import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './Collapse.css'; 

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapsible">
      <h3 onClick={toggleCollapse}>
        {title}
        <FontAwesomeIcon
          icon={faChevronUp}
          className={`arrow ${isOpen ? 'open' : ''}`}
        />
      </h3>
      <div className={`content ${isOpen ? 'open' : ''}`}>{children}</div>
    </div>
  );
}

export default Collapse;
