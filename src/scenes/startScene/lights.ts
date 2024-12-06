import {
  AmbientLight,
  DirectionalLight,
  Object3D,
  SpotLight,
  SpotLightHelper,
} from "three";

const first = new DirectionalLight(0xffffff, 1);
first.position.set(0, 1, 1);
first.castShadow = true;
first.shadow.mapSize.width = 512;
first.shadow.mapSize.height = 512;
first.shadow.camera.near = 0.5;
first.shadow.camera.far = 500;

const second = new AmbientLight(0x888888);

export const StartSceneSpotLight = new SpotLight(0xffffff, 3000);

StartSceneSpotLight.castShadow = true;
StartSceneSpotLight.angle = 0.5;
StartSceneSpotLight.penumbra = 0.2;
StartSceneSpotLight.decay = 2;
StartSceneSpotLight.power = 2000;
StartSceneSpotLight.distance = 100;
StartSceneSpotLight.position.set(13, 32, -3);
StartSceneSpotLight.target = new Object3D();
StartSceneSpotLight.target.position.set(-40, 0, 10);
const helper = new SpotLightHelper(StartSceneSpotLight);

export const StartSceneLights = [second, StartSceneSpotLight];
