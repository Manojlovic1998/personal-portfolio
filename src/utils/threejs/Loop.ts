import * as THREE from "three";
import type { GLTF } from "three/addons/loaders/GLTFLoader.js";
import type { Controls } from "./createControls";

type GLTFUpdatable = {
  glTFObject: GLTF;
  tick: (delta: number) => void;
};

type Updatable = GLTFUpdatable | Controls;

interface SceneLoop {
  camera: THREE.PerspectiveCamera;
  scene: THREE.Scene;
  renderer: THREE.WebGLRenderer;
  updatables?: Updatable[];
  tick: () => void;
  start: () => void;
  stop: () => void;
}

// For dynamic Frames and frame decoupling
const clock = new THREE.Clock();
// Loop Constructor
class Loop implements SceneLoop {
  camera;
  scene;
  renderer;
  updatables: Updatable[];

  constructor(
    camera: THREE.PerspectiveCamera,
    scene: THREE.Scene,
    renderer: THREE.WebGLRenderer
  ) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.updatables = [];
  }

  tick() {
    const delta = clock.getDelta();
    for (const object of this.updatables) {
      object.tick(delta);
    }
  }

  start() {
    this.renderer.setAnimationLoop(() => {
      this.tick();

      this.renderer.render(this.scene, this.camera);
    });
  }

  stop() {
    this.renderer.setAnimationLoop(null);
  }
}

export default Loop;
