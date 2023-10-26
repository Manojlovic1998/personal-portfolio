import * as THREE from "three";
import type { WorldReference } from "./World";

type FloorSettings = {
  width?: number | undefined;
  height?: number | undefined;
  widthSegments?: number | undefined;
  heightSegments?: number | undefined;
  meshParameters?: THREE.MeshPhongMaterialParameters;
  rotation?: number;
  receiveShadow?: boolean;
  position?: THREE.Vector3;
};

const createFloor = (floorSettings: FloorSettings) => {
  const {
    width,
    height,
    widthSegments,
    heightSegments,
    meshParameters,
    rotation,
    receiveShadow,
    position,
  } = floorSettings;

  console.log(floorSettings);

  const floorGeometry = new THREE.PlaneGeometry(
    width,
    height,
    widthSegments,
    heightSegments,
  );

  const floorMaterial = new THREE.ShadowMaterial(meshParameters);

  const floor = new THREE.Mesh(floorGeometry, floorMaterial);

  floor.rotation.x = THREE.MathUtils.degToRad(rotation ?? 90);
  floor.receiveShadow = receiveShadow ?? false;
  floor.position.set(
    position ? position.x : 0,
    position ? position.y : 0,
    position ? position.z : 0,
  );

  return floor;
};

export default createFloor;
