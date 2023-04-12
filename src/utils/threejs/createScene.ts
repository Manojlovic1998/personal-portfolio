import * as THREE from "three";

const createScene = (color?: THREE.ColorRepresentation) => {
  const scene = new THREE.Scene();
  if (color) {
    scene.background = new THREE.Color(color);
  }
  return scene;
};

export default createScene;
