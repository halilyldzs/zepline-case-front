import React from 'react';

interface VectorProps {
  className?: string;
}

function Vector({ className }: VectorProps) {
  return (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 19 17" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      
<path d="M14.5808 0H17.4196L11.2173 7.08943L18.5143 16.7346H12.8011L8.3268 10.8841L3.20606 16.7346H0.365657L6.99994 9.15146L0 0.000771465H5.85823L9.90283 5.34831L14.5808 0ZM13.5849 15.0359H15.1578L5.00349 1.60997H3.3156L13.5849 15.0359Z" fill="currentColor"/>


    </svg>
  );
}

export default Vector;
