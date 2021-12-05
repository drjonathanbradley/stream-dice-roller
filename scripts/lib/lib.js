export default class StreamOverlay {
  constructor() {}

  visible = true;
  ids = ["logo", "navigation", "controls", "sidebar", "players", "hotbar"];
  messageDiv;
  ui = [];

  getUI() {
    this.ui = this.ids.map((value) => {
      return document.getElementById(value);
    });
    // console.log(this.ui);
    this.messageDiv = document.createElement("div");
    this.messageDiv.setAttribute("id", "stream-message-container");
    document.body.append(this.messageDiv);
    // console.log(this.messageDiv);
    // document.body.insertBefore(this.messageDiv, document.body.firstChild);
  }

  showMessage(message) {
    let display =
      message.user.name +
      " rolling " +
      message.roll._formula +
      "<br />" +
      message.roll.result +
      " = " +
      message.roll._total;
    let displayP = document.createElement("p");
    displayP.innerHTML = display;
    document.getElementById("stream-message-container").append(displayP);
    // console.log(display);
  }

  hide() {
    this.ui.forEach((element) => {
      element.style.display = "none";
    });
  }

  show() {
    this.ui.forEach((element) => {
      element.style.display = null;
    });
  }

  toggle() {
    this.visible ? this.hide() : this.show();
    this.visible = !this.visible;
  }
}
