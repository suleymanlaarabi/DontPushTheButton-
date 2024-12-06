export const renderer = initRenderer();

import { initStartScene } from "./scenes/startScene/init";
import { loop } from "./setup/loop";
import { initRenderer } from "./setup/renderer";

export const video = document.getElementById("video") as HTMLVideoElement;
video.muted = true;
video.style.display = "none";
video.volume = 1;
video.addEventListener("timeupdate", () => {
  if (video.currentTime >= 6) {
    video.currentTime = 0;
    video.pause();
    video.style.display = "none";
  }
});
initStartScene().then((scene) => {
  loop(renderer, scene);
});
