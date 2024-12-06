import { initDefaultScene } from "../default";
import { GameScene } from "../types";
import { renderer, video } from "../../main";
import {
  StartSceneBuzzerBase,
  StartSceneBuzzerPush,
  StartSceneLamp,
  StartSceneRules,
  StartSceneTable,
} from "./objects";
import { StartSceneLights, StartSceneSpotLight } from "./lights";
import { StartSceneRayCast } from "./raycast";
import { isMouseDown, pointerMouse } from "../../utils/mousePosition";
import { initOrbitControls } from "../../utils/camera";

export let StartScene = initDefaultScene();

export async function initStartScene(): Promise<GameScene> {
  const [push_buzzer] = (
    await Promise.all([
      StartSceneBuzzerPush,
      StartSceneBuzzerBase,
      StartSceneTable,
      StartSceneLamp,
      StartSceneRules,
      ...StartSceneLights,
    ])
  ).map((obj) => {
    StartScene.scene.add(obj);
    return obj;
  });
  initOrbitControls(StartScene.camera, renderer);
  StartScene.update = () => {
    StartSceneRayCast.setFromCamera(pointerMouse, StartScene.camera);
    const intersects = StartSceneRayCast.intersectObject(push_buzzer);
    intersects.forEach(() => {
      if (isMouseDown) {
        video.style.display = "flex";
        video.muted = false;
        video.play();
        StartSceneSpotLight.color.b = 0;
        StartSceneSpotLight.color.g = 0;
        push_buzzer.position.y = 22.4;
      } else {
        StartSceneSpotLight.color.b = 1;
        StartSceneSpotLight.color.g = 1;
        push_buzzer.position.y = 22.8;
      }
    });
  };
  return StartScene;
}
