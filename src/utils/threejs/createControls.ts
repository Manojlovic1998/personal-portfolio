import type { PerspectiveCamera, EventListener, BaseEvent } from "three";
import {
  OrbitControls,
  type OrbitControlsEventMap,
} from "three/addons/controls/OrbitControls.js";

export interface Controls {
  orbitControls: OrbitControls;
  tick: () => void;
}

export type ControlSettings = {
  enableDamping?: boolean;
  autoRotate?: boolean;
  enableZoom?: boolean;
  enablePan?: boolean;
  enabled?: boolean;
};

// Takes configuration and returns Controls
const createControls = (
  camera: PerspectiveCamera,
  canvas: HTMLCanvasElement,
  controlSettings?: ControlSettings,
): Controls => {
  const defaultControlSettings = {
    enabled: true,
    enableDamping: true,
    autoRotate: false,
    enablePan: true,
    enableZoom: true,
  };

  const { enableDamping, autoRotate, enabled, enablePan } = {
    ...defaultControlSettings,
    ...controlSettings,
  };

  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = enableDamping;
  controls.autoRotate = autoRotate;
  controls.enabled = enabled;
  controls.enablePan = enablePan;
  controls.update();

  return {
    orbitControls: controls,
    tick: () => {
      controls.update();
    },
  };
};

export default createControls;
