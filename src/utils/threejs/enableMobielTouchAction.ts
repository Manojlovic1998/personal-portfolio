/* 
  Three.js's OrbitalControls class sets the following inline style within its constructor method
  It is a very case specific option which interfiers with touch scroll on mobile, therefore I have wrote this script which removes it
  based on screen size.
  touch-action: none;
} */

import matchMediaQuery from "./matchMediaQuery";

const enableMobileTouchAction = (query: string) => {
  const canvas = document.getElementsByClassName("scene")[0] as HTMLElement;
  const onMatchCallback = () => {
    canvas.style.touchAction = "pan-y";
  };

  const onMismatchCallback = () => {
    canvas.style.touchAction = "none";
  };

  const mediaQuery = matchMediaQuery(
    query,
    onMatchCallback,
    onMismatchCallback,
  );
};

export default enableMobileTouchAction;
