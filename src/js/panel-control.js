(function () {
  function createButtons(qtd, container) {
    container.innerHTML = "";
    for (let i = qtd; i >= 1; i--) {
      const button = document.createElement("button");
      button.textContent = i;
      container.appendChild(button);
    }
    const terreoButton = document.createElement("button");
    terreoButton.textContent = "T";
    container.appendChild(terreoButton);
  }

  function updateControlPanel() {
    const elFloor = document.querySelectorAll("[floor]");
    const controlButtons = document.querySelector(".control-buttons");
    const qtd = +elFloor[0].getAttribute("floor");

    if (controlButtons) {
      createButtons(qtd, controlButtons);
    }
  }

  updateControlPanel();
})();