import { Raycaster } from "three";
import { StartSceneCube } from "./objects";

export const StartSceneRayCast = new Raycaster();

StartSceneRayCast.intersectObject(StartSceneCube);
