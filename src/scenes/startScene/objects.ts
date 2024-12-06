import { BoxGeometry, Mesh, MeshBasicMaterial } from "three";
import { loadFromPath, loadFromPathGLTF } from "../../utils/loadObj";
import { degToRad } from "three/src/math/MathUtils.js";

export const StartSceneCube = new Mesh(
  new BoxGeometry(1, 1, 1),
  new MeshBasicMaterial({ color: 0xff0000 }),
);

export const StartSceneBuzzerBase = loadFromPath("base_buzzer").then((obj) => {
  obj.position.setY(22.8);
  return obj;
});

export const StartSceneRules = loadFromPathGLTF("Rules.glb").then((obj) => {
  const { scene } = obj;
  scene.position.set(-15, 23.1, 0);
  scene.rotation.set(0, degToRad(-75), 0);
  return scene;
});

export const StartSceneBuzzerPush = loadFromPath("push_buzzer").then((obj) => {
  obj.position.setY(22.8);
  obj.receiveShadow = true;
  return obj;
});

export const StartSceneLamp = loadFromPathGLTF("old_lamp.glb").then(
  ({ scene }) => {
    scene.scale.setScalar(0.3);
    scene.position.set(14, 29.2, -4);
    scene.rotation.set(0, 5, 0);
    return scene;
  },
);

export const StartSceneTable = loadFromPathGLTF("table.glb").then(
  ({ scene }) => {
    scene.scale.set(100, 100, 100);
    scene.receiveShadow = true;
    return scene;
  },
);
