import { toggleOverlay } from "./lib";

let overlayVisible = false;

Hooks.once("getSceneControlButtons", async function (controls) {
  controls[0].tools.push({
    name: "stream",
    label: "Stream Dice Roller",
    icon: "fas fa-tv",
    visible: true,
    toggle: true,
    onclick: () => {
      toggleOverlay(overlayVisible);
    },
  });
});

Hooks.once("setup", async function () {
  const keys = global.game.keyboard._downKeys();
  console.log(keys);
});
