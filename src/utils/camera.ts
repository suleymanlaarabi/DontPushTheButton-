import { Camera, WebGLRenderer } from "three";
import {
  FirstPersonControls,
  OrbitControls,
} from "three/examples/jsm/Addons.js";

export function initOrbitControls(camera: Camera, renderer: WebGLRenderer) {
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 30, 0);
  controls.update();
  return controls;
}
