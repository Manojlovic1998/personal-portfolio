import * as THREE from "three";

export type CameraSettings = {
  fov?: number | undefined;
  aspect?: number | undefined;
  near?: number | undefined;
  far?: number | undefined;
  position?: { x: number; y: number; z: number };
};

type CameraDefault = {
  fov: number | undefined;
  aspect: number | undefined;
  near: number | undefined;
  far: number | undefined;
  position: { x: number; y: number; z: number };
};

const createCamera = (cameraSettings?: CameraSettings) => {
  let defaultSettings: CameraDefault = {
    fov: 50,
    aspect: 1,
    near: 0.1,
    far: 1000,
    position: { x: 0, y: 0, z: 120 },
  };

  const { fov, aspect, near, far, position } = {
    ...defaultSettings,
    ...cameraSettings,
  };

  const camera = new THREE.PerspectiveCamera(
    fov, // fov = Field of View
    aspect, // aspect ratio
    near, // near clipping plane
    far // far clipping plane
  );

  // Move the camera back so we can view the scene
  camera.position.set(position.x, position.y, position.z);

  return camera;
};

export default createCamera;
