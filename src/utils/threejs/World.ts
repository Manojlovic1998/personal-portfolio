import type {
  AmbientLight,
  ColorRepresentation,
  DirectionalLight,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";
import createCamera from "./createCamera";
import type { CameraSettings } from "./createCamera";
import createLights from "./createLights";
import createRenderer from "./createRenderer";
import createScene from "./createScene";
import createControls, { ControlSettings } from "./createControls";
import type { Controls } from "./createControls";
import Loop from "./Loop";
import Resizer from "./Resizer";

interface WorldReference {
  scene: Scene;
  camera: PerspectiveCamera;
  renderer: WebGLRenderer;
  controls: Controls;
  loop: Loop;
  lights: {
    ambientLight: AmbientLight;
    mainLight: DirectionalLight;
  };
  resizer: Resizer;
  init: () => Promise<void>;
}

class World implements WorldReference {
  scene;
  camera;
  renderer;
  lights;
  controls;
  loop;
  resizer;

  constructor(
    container: HTMLElement,
    color?: ColorRepresentation,
    cameraSettings?: CameraSettings,
    rendererSettings?: THREE.WebGLRendererParameters,
    controlSettings?: ControlSettings
  ) {
    // synchronous setup here
    // create camera, renderer, scene, etc..
    this.scene = createScene(color);
    this.camera = createCamera(cameraSettings);
    this.renderer = createRenderer(rendererSettings);
    this.lights = createLights();

    this.scene.add(this.lights.ambientLight, this.lights.mainLight);
    this.controls = createControls(
      this.camera,
      this.renderer.domElement,
      controlSettings
    );
    this.loop = new Loop(this.camera, this.scene, this.renderer);
    this.loop.updatables.push(this.controls);

    container.appendChild(this.renderer.domElement);

    this.resizer = new Resizer(container, this.camera, this.renderer);
  }

  async init() {
    // asynchronous setup here
    // e.g loading models
    // Moce the target to the center of the bird
    // this.controls.target.copy(this.testCube.position);
  }

  render() {
    // Draw single frame
    this.renderer.render(this.scene, this.camera);
  }

  start() {
    this.loop.start();
  }

  stop() {
    this.loop.stop();
  }
}

export default World;
