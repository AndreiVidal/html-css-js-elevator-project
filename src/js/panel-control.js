(function () {
  function createButtons(qtd, container) {
    container.innerHTML = "";
    for (let i = qtd; i >= 1; i--) {
      const button = document.createElement("button");
      button.textContent = i;
      button.setAttribute("move-to", i);
      button.addEventListener("click", moveElevator);
      container.appendChild(button);
    }

    const terreoButton = document.createElement("button");
    terreoButton.textContent = "T";
    terreoButton.setAttribute("move-to", "t");
    terreoButton.addEventListener("click", moveElevator);
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

  function updateDisplayPanel(text){
    const display = document.querySelector(".display-panel")
    display.innerHTML = text
  }

  function getElevatorSize() {
    const elevatorSize = document.querySelector('[floor="t"]');
    return elevatorSize.offsetHeight;
  }

  function moveElevator(event) {
    const targetFloor = event.target.getAttribute("move-to");
    const numberFloor = targetFloor === "t" ? 0 : +targetFloor;

    const elevator = document.querySelector(".elevator");
    const elevatorSize = getElevatorSize();

    updateDisplayPanel(targetFloor==='t' ? 'Térreo' : `${targetFloor}º Andar`)

    elevator.style.transition = "bottom 1s ease";
    elevator.style.bottom = numberFloor * elevatorSize + "px";
  }

  updateControlPanel();
})();
