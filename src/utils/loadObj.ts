import { Group, Object3DEventMap } from "three";
import {
  GLTF,
  GLTFLoader,
  MTLLoader,
  OBJLoader,
} from "three/examples/jsm/Addons.js";

export const materialLoader = new MTLLoader();

export async function loadFromPath(
  path: string,
): Promise<Group<Object3DEventMap>> {
  return await new Promise((resolve) => {
    materialLoader.load(`${path}.mtl`, (materials) => {
      materials.preload();
      const loader = new OBJLoader();
      loader.setMaterials(materials);
      loader.load(`${path}.obj`, (obj) => {
        resolve(obj);
      });
    });
  });
}

const gltfLoader = new GLTFLoader().setPath("/");

export async function loadFromPathGLTF(path: string): Promise<GLTF> {
  return await gltfLoader.loadAsync(path);
}
