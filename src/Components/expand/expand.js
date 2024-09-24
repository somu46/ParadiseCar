import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Expand = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div onClick={handleToggle} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
        {isExpanded ? <FaMinus /> : <FaPlus />}
      </div>

      {/* Conditionally render the children content when expanded */}
      <div className={`expand-content ${isExpanded ? 'active' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default Expand;
