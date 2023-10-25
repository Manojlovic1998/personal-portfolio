import { type GLTF, GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";
import setupModel from "./setupModel";
import type { Object3D, Object3DEventMap } from "three";

type ObjectSource = { url?: string; path?: string };

type ModelData = Promise<
  | (
      | {
          model: Object3D<Object3DEventMap>;
          tick: (delta: number) => void;
        }
      | {
          model: Object3D<Object3DEventMap>;
          tick?: undefined;
        }
    )[]
  | undefined
>;

const loadGLTFObject = async (
  objectSource: ObjectSource[],
  clipMap?: (animation: THREE.AnimationClip) => void,
): ModelData => {
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath(
    "https://www.gstatic.com/draco/versioned/decoders/1.5.6/",
  );
  await dracoLoader.preload();

  const loader = new GLTFLoader();

  loader.setDRACOLoader(dracoLoader);

  // Create array of promisss to load one or more objects
  const promises: Promise<GLTF>[] = [];
  objectSource.map((object) => {
    if (object.url) {
      promises.push(loader.loadAsync(object.url));
    } else if (object.path) {
      promises.push(loader.loadAsync(object.path));
    }
  });
  // Load one or more object data
  const objectsData = await Promise.all<Promise<GLTF>>(promises);

  // Set up model
  if (objectsData.length !== 0) {
    const loadedObjects = objectsData.map((modelData) => {
      return setupModel(modelData, clipMap);
    });

    return loadedObjects;
  }
};

export default loadGLTFObject;
