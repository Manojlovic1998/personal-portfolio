import * as THREE from "three";

const createRenderer = (rendererSettings?: THREE.WebGLRendererParameters) => {
  const defaultRendererSettings: THREE.WebGLRendererParameters = {
    antialias: true,
    alpha: true,
  };

  const { antialias, alpha } = {
    ...defaultRendererSettings,
    ...rendererSettings,
  };

  const renderer = new THREE.WebGLRenderer({ antialias, alpha });
  renderer.outputEncoding = THREE.sRGBEncoding;
  return renderer;
};

export default createRenderer;
