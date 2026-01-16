import React from 'react';

interface ArrowLeftProps {
  className?: string;
}

function ArrowLeft({ className }: ArrowLeftProps) {
  return (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 15 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      
<g clipPath="url(#clip0_1_6543)">
<path d="M13.48 20.28L5.65 12H5.66L13.35 3.88C14.19 3.03 14.22 1.66 13.44 0.76C13.03 0.28 12.46 0.01 11.83 0C11.17 0 10.62 0.22 10.17 0.66L0.899999 10.04C0.629999 10.31 -0.180001 11.14 0.0399992 12.26C0.199999 13.02 0.609999 13.43 0.979999 13.78L10.46 23.36C10.86 23.78 11.4 24 11.97 24C12.54 24 13.08 23.77 13.48 23.36C13.89 22.94 14.11 22.41 14.11 21.82C14.11 21.23 13.88 20.69 13.48 20.28Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_1_6543">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>


    </svg>
  );
}

export default ArrowLeft;
