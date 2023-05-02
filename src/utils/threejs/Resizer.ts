const setSize = (container: HTMLElement, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer) => {
    // Set the camera's aspect ratio
    camera.aspect = container.clientWidth / container.clientHeight;
  
    // Update the camera's frustum
    camera.updateProjectionMatrix();
  
    // Update the size of the renderer AND the canvas
    renderer.setSize(container.clientWidth, container.clientHeight);
  
    // Set the pixel ratio (for mobile devices)
    renderer.setPixelRatio(window.devicePixelRatio);
  };

class Resizer {
    onResizeCallback?: () => void;

    constructor(container: HTMLElement, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer, onResizeCallback?: () => void) {
      setSize(container, camera, renderer);
      this.onResizeCallback = onResizeCallback;
  
      window.addEventListener("resize", () => {
        // set the size again if a resize occurs
        setSize(container, camera, renderer);
        // perform any custom actions
        if (onResizeCallback) (this.onResize(onResizeCallback));
      });
    }
  
    onResize(onResizeCallback: () => void) {
      onResizeCallback();
    }
  }


export default Resizer;