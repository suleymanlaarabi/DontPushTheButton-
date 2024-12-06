import { PerspectiveCamera, Scene } from "three";

export type GameScene = {
  scene: Scene;
  camera: PerspectiveCamera;
  update: (scene: GameScene) => void;
};
