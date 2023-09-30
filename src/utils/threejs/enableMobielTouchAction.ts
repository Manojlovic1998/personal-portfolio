/* 
  Three.js's OrbitalControls class sets the following inline style within its constructor method
  It is a very case specific option which interfiers with touch scroll on mobile, therefore I have wrote this script which removes it
  based on screen size.
  touch-action: none;
} */

const enableMobileTouchAction = () => {
  const mediaQuery = window.matchMedia("(max-width: 768px)");
  const canvas = document.getElementsByClassName("scene")[0] as HTMLElement;
  switch (mediaQuery.matches) {
    case true:
      canvas.style.touchAction = "pan-y";
      break;
    case false:
      canvas.style.touchAction = "none";
      break;
  }
};

export default enableMobileTouchAction;
