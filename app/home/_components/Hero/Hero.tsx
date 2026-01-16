import React from 'react';

export default function Hero() {
  return (
    <div
      className="w-full"
      style={{
        aspectRatio: '1728 / 750',
        backgroundImage: "url('/images/hero.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    ></div>
  );
}
