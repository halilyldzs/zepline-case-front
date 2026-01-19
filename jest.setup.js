import '@testing-library/jest-dom';
import React from 'react';

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  };

function MockImage(props) {
  return React.createElement("img", props);
}
jest.mock("next/image", () => MockImage);




