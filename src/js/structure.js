(function () {
  //----------------------------- Prédio
  function createdLobby() {
    const window = document.createElement("div");
    window.classList.add("window");

    const lobby = document.createElement("div");
    lobby.classList.add("lobby");
    lobby.setAttribute("floor", "t");
    lobby.appendChild(window);

    return lobby;
  }

  function createdFloor(numberFloor) {
    const door = document.createElement("div");
    door.classList.add("door");

    const floor = document.createElement("div");
    floor.classList.add("floor");
    floor.setAttribute("floor", numberFloor);
    floor.appendChild(door);
    return floor;
  }

  function buildingFloor() {
    const elFloor = document.querySelectorAll("[floor]");

    elFloor.forEach((el) => {
      const qtd = +el.getAttribute("floor");
      for (let i = qtd; i > 0; i--) {
        el.appendChild(createdFloor(i));
      }
      el.appendChild(createdLobby());
    });
  }

  buildingFloor();

  //----------------------------- Elevador
  function getElevatorSize() {
    const elevatorSize = document.querySelector('[floor="t"]');
    return elevatorSize.offsetHeight + "px";
  }

  function createElevator() {
    const buildingElevator = document.querySelector(".building-elevator");
    const elevator = document.createElement("div");
    elevator.classList.add("elevator");
    elevator.style.height = getElevatorSize();
    elevator.style.bottom = "0px";
    buildingElevator.appendChild(elevator);
  }

  createElevator();
})();
