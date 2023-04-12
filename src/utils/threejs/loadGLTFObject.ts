import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import setupModel from "./setupModel";

type ObjectSource = { url?: string; path?: string };

const loadGLTFObject = async (objectSource: ObjectSource[]) => {
  const loader = new GLTFLoader();
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
      return setupModel(modelData);
    });

    return loadedObjects;
  }
};

export default loadGLTFObject;
