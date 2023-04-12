import * as THREE from "three";

const createLights = () => {
  // Create a direcitonal light
  const ambientLight = new THREE.AmbientLight(0xffffff, 1);

  // Move the light right, up, and towards us
  const mainLight = new THREE.DirectionalLight(0xffffff, 2);
  mainLight.position.set(10, 10, 10);
  return { ambientLight, mainLight };
};

export default createLights;
