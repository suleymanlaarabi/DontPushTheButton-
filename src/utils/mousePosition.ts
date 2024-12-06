import { Vector2 } from "three";

export const pointerMouse = new Vector2();
export let isMouseUp: boolean = false;
export let isMouseDown: boolean = false;

window.addEventListener("pointermove", (event) => {
  pointerMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointerMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
});

window.addEventListener("mousedown", () => {
  isMouseDown = true;
  isMouseUp = false;
});

window.addEventListener("mouseup", () => {
  isMouseUp = true;
  isMouseDown = false;
});
