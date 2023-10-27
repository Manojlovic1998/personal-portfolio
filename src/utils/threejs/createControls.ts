import type { PerspectiveCamera, EventListener, BaseEvent } from "three";
import {
  OrbitControls,
  type OrbitControlsEventMap,
} from "three/addons/controls/OrbitControls.js";

export interface Controls extends OrbitControls {
  tick: () => void;
}

export type ControlSettings = {
  enableDamping?: boolean;
  autoRotate?: boolean;
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
  };

  const { enableDamping, autoRotate, enabled } = {
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
    listenToKeyEvents: controls.listenToKeyEvents,
    stopListenToKeyEvents: controls.stopListenToKeyEvents,
    saveState: controls.saveState,
    update: controls.update,
    reset: controls.reset,
    dispose: controls.dispose,
    getPolarAngle: controls.getPolarAngle,
    getAzimuthalAngle: controls.getAzimuthalAngle,
    getDistance: controls.getDistance,
    addEventListener: <T extends keyof OrbitControlsEventMap>(
      type: T,
      listener: (event: OrbitControlsEventMap[T]) => void,
    ): void => {
      controls.addEventListener(type, listener);
    },
    hasEventListener: <T extends keyof OrbitControlsEventMap>(
      type: T,
      listener: (event: OrbitControlsEventMap[T]) => void,
    ): boolean => {
      return controls.hasEventListener(type, listener);
    },
    removeEventListener: <T extends keyof OrbitControlsEventMap>(
      type: T,
      listener: (event: OrbitControlsEventMap[T]) => void,
    ): void => {
      controls.removeEventListener(type, listener);
    },
    dispatchEvent: <T extends keyof OrbitControlsEventMap>(
      event: BaseEvent<T> & OrbitControlsEventMap[T],
    ): void => {
      controls.dispatchEvent(event);
    },
  };
};

export default createControls;
