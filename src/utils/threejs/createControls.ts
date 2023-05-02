import type { PerspectiveCamera } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export interface Controls extends OrbitControls {
  tick: () => void;
}

export type ControlSettings = {
  enableDamping?: boolean;
  autoRotate?: boolean;
  enabled?: true
};

// Takes configuration and returns Controls
const createControls = (
  camera: PerspectiveCamera,
  canvas: HTMLCanvasElement,
  controlSettings?: ControlSettings
): Controls => {
  const defaultControlSettings = {
    enabled: true,
    enableDamping: true,
    autoRotate: false,
  };

  const { enableDamping, autoRotate, enabled} = {
    ...defaultControlSettings,
    ...controlSettings,
  };

  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = enableDamping;
  controls.autoRotate = autoRotate;
  controls.enabled = enabled;
  controls.update();
  return {
    ...controls,
    tick: () => {
      controls.update();
    },
  } as Controls;
};

export default createControls;
