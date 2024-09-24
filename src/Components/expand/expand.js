import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Expand = () => {
  // State to toggle between expanded and collapsed
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle expand/collapse state
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div onClick={handleToggle} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
        {isExpanded ? <FaMinus /> : <FaPlus />}
        <span style={{ marginLeft: '10px' }}>{isExpanded ? 'Collapse' : 'Expand'}</span>
      </div>
    </div>
  );
};

export default Expand;
