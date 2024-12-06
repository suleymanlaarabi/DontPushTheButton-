import { WebGLRenderer } from "three";
import { GameScene } from "../scenes/types";

export function loop(
  renderer: WebGLRenderer,
  { camera, scene, update }: GameScene,
) {
  renderer.setAnimationLoop(() => {
    update({ camera, scene, update });
    renderer.render(scene, camera);
  });
}
