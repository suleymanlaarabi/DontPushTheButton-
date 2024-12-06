import { PerspectiveCamera, Scene } from "three";
import { GameScene } from "./types";

export function initDefaultScene(): GameScene {
  const scene = new Scene();
  const camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );
  camera.position.z = 50;
  return {
    camera,
    scene,
    update: () => {},
  };
}
