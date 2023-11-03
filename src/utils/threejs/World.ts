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
import createControls, { type ControlSettings } from "./createControls";
import type { Controls } from "./createControls";
import Loop from "./Loop";
import Resizer from "./Resizer";

export interface WorldReference {
  scene: Scene;
  camera: PerspectiveCamera;
  renderer: WebGLRenderer;
  controls: Controls["orbitControls"];
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
    controlSettings?: ControlSettings,
    resizeCallback?: () => void,
  ) {
    // synchronous setup here
    // create camera, renderer, scene, etc..
    this.scene = createScene(color);
    this.camera = createCamera(cameraSettings);
    this.renderer = createRenderer(rendererSettings);
    this.lights = createLights();

    this.scene.add(this.lights.ambientLight, this.lights.mainLight);
    const controls = createControls(
      this.camera,
      this.renderer.domElement,
      controlSettings,
    );

    this.controls = controls.orbitControls;

    this.loop = new Loop(this.camera, this.scene, this.renderer);
    this.loop.updatables.push(controls);

    this.renderer.domElement.classList.add("scene");
    container.appendChild(this.renderer.domElement);

    this.resizer = new Resizer(container, this.camera, this.renderer, () => {
      if (resizeCallback) resizeCallback();
      this.render();
    });
  }

  async init() {
    // asynchronous setup here
    // e.g loading models
  }

  render() {
    // Draw single frame
    this.renderer.render(this.scene, this.camera);
  }

  start() {
    // Run custom resize callback before first frame
    if (this.resizer.onResizeCallback)
      this.resizer.onResize(this.resizer.onResizeCallback);
    // Start loop
    this.loop.start();
  }

  stop() {
    this.loop.stop();
  }
}

export default World;
