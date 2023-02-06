import { useState } from 'react';

// Method 1 {@useState}
// function reactOnMouse(event) {
//   const [isElement, setElement] = useState(isElement);
//   const elementOn = event.currentTarget.classList.add(`{style={transform: 'skeyX()'}}`)

//   onMouseEnter = () => setElement(elementOn);
//   onMouseLeave = () => setElement(isElement);
// }

// Method 2 {@func(e)}
// function reactOnMouse(e) {
//   console.log('Hello')
//   e.target.style.color = 'black';
// }

function ReactOnMouse({ children }) {
  const [hover, setHover] = useState();

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div
      style={{ transform: `translateX()` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children(hover)}
    </div>
  );
}

export default ReactOnMouse;