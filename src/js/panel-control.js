(function () {
  let isMoving = false;
  let currentAnimation = null;

  function createButtons(qtd, container) {
    container.innerHTML = "";
    for (let i = qtd; i >= 1; i--) {
      const button = document.createElement("button");
      button.textContent = i;
      button.setAttribute("move-to", i);
      button.classList.add("floor-button");
      button.addEventListener("click", moveElevator);
      container.appendChild(button);
    }

    const terreoButton = document.createElement("button");
    terreoButton.textContent = "T";
    terreoButton.setAttribute("move-to", "t");
    terreoButton.classList.add("floor-button");
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

  function updateDisplayPanel(text) {
    const display = document.querySelector(".display-panel");
    if (display) {
      display.innerHTML = text;
    }
  }

  function getElevatorSize() {
    const elevatorSize = document.querySelector('[floor="t"]');
    return elevatorSize.offsetHeight;
  }

  function getPositionElevator() {
    const elevator = document.querySelector(".elevator");
    return parseInt(elevator.style.bottom.replace("px", "")) || 0;
  }

  function moveElevator(event) {
    if (isMoving) return;

    isMoving = true;
    const clickedButton = event.target;

    document.querySelectorAll(".floor-button").forEach(btn => btn.classList.remove("highlighted"));
    clickedButton.classList.add("highlighted");

    const targetFloor = clickedButton.getAttribute("move-to");
    const numberFloor = targetFloor === "t" ? 0 : +targetFloor;

    const elevator = document.querySelector(".elevator");
    const elevatorSize = getElevatorSize();

    const start = getPositionElevator();
    const end = numberFloor * elevatorSize;
    const goingUp = end > start;

    updateDisplayPanel(goingUp ? "Subindo" : "Descendo");

    const distance = Math.abs(end - start);
    const speed = 100; 
    const duration = distance / speed * 1000;

    const startTime = performance.now();

    function animate(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const newPos = start + (end - start) * progress;

      elevator.style.bottom = newPos + "px";

      if (progress < 1) {
        currentAnimation = requestAnimationFrame(animate);
      } else {
        updateDisplayPanel(targetFloor === "t" ? "Térreo" : `${targetFloor}º Andar`);
        clickedButton.classList.remove("highlighted");
        isMoving = false;
        currentAnimation = null;
      }
    }

    requestAnimationFrame(animate);
  }

  updateControlPanel();
})();
