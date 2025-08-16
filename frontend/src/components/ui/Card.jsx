import React from 'react';

const Card = ({ children, className = '', padding = 'p-6', ...props }) => {
  return (
    <div 
      className={`bg-white text-black rounded-xl shadow-lg ${padding} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;