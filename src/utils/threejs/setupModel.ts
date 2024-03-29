import * as THREE from "three";
import type { GLTF } from "three/addons/loaders/GLTFLoader.js";

const setupModel = (
  data: GLTF,
  clipMap?: (animation: THREE.AnimationClip) => void,
) => {
  const model = data.scene.children[0];
  const animations = data.animations;

  if (animations && clipMap) {
    animations.forEach((animation) => clipMap(animation));
  }

  const clip = data.animations[0];

  if (clip) {
    const mixer = new THREE.AnimationMixer(model);
    const action = mixer.clipAction(clip);
    action.play();

    const tick: (delta: number) => void = (delta) => mixer.update(delta);

    return { model: model, tick: tick };
  }
  return { model: model };
};

export default setupModel;
