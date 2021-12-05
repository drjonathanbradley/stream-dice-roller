import StreamOverlay from "./lib/lib.js";

const overlay = new StreamOverlay();

Hooks.on("getSceneControlButtons", function (controls) {
  controls[0].tools.push({
    name: "stream",
    label: "Stream Dice Roller",
    icon: "fas fa-tv",
    visible: true,
    button: true,
    onClick: () => {
      // console.log("Button Triggered");
      overlay.toggle();
    },
  });
});

Hooks.on("ready", function () {
  document.addEventListener("keydown", checkKeys);
  overlay.getUI();
});

Hooks.on("createChatMessage", async function (message) {
  // console.log("Message: ");
  // console.log(message);
  if (message.isRoll) {
    overlay.showMessage(message);
  }
});

function checkKeys(e) {
  if (e.ctrlKey && e.code === "F8") {
    // console.log("Function Triggered");
    overlay.toggle();
  }
}
