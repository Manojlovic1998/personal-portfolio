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
    constructor(container: HTMLElement, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer) {
      setSize(container, camera, renderer);
  
      window.addEventListener("resize", () => {
        // set the size again if a resize occurs
        setSize(container, camera, renderer);
  
        // perform any custom actions
        this.onResize();
      });
    }
  
    onResize() {}
  }


export default Resizer;