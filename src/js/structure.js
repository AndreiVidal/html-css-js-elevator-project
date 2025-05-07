(function () {
  function createdLobby() {
    const window = document.createElement("div");
    window.classList.add("window");

    const lobby = document.createElement("div");
    lobby.classList.add("lobby");
    lobby.appendChild(window);

    return lobby;
  }

  function createdFloor() {
    const door = document.createElement("div");
    door.classList.add("door");

    const floor = document.createElement("div");
    floor.classList.add("floor");
    floor.appendChild(door);
    return floor;
  }
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

  function buildingFloor() {
    const elFloor = document.querySelectorAll("[floor]");
    const controlButtons = document.querySelector(".control-buttons");
    const displayPanel = document.querySelector(".display-panel");
    const qtd = +elFloor[0].getAttribute("floor");

    if (controlButtons) {
      createButtons(qtd, controlButtons);
    }

    elFloor.forEach((el) => {
      const qtd = +el.getAttribute("floor");
      for (let i = qtd; i > 0; i--) {
        el.appendChild(createdFloor());
      }
      el.appendChild(createdLobby());
    });
  }

  buildingFloor();
})();
