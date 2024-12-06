import { PCFSoftShadowMap, WebGLRenderer } from "three";

export function initRenderer(): WebGLRenderer {
  const GameRenderer = new WebGLRenderer({
    antialias: true,
  });

  GameRenderer.shadowMap.enabled = true;
  GameRenderer.shadowMap.type = PCFSoftShadowMap;
  GameRenderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(GameRenderer.domElement);
  return GameRenderer;
}
