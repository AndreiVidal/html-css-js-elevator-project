(function () {
  function createLanes() {
    const lanesOnStreet = document.querySelectorAll("[lanes]");
    lanesOnStreet.forEach((el) => {
      const qtdLanes = +el.getAttribute("lanes");
      for (let i = 0; i < qtdLanes; i++) {
        const lane = document.createElement("span");
        lane.classList.add("lane");
        el.appendChild(lane);
      }
    });
  }
  createLanes();
})();
