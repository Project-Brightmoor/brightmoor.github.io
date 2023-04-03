(function () {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  // resize the canvas to fill browser window dynamically
  window.addEventListener("resize", resizeCanvas, false);

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    /**
     * Your drawings need to be inside this function otherwise they will be reset when
     * you resize the browser window and the canvas goes will be cleared.
     */
    draw();
  }

  let ticks = 0;

  let timerId = setTimeout(function tick() {
    ticks = ticks + 1;
    draw();
    timerId = setTimeout(tick, 200); // (*)
  }, 2000);

  resizeCanvas();

  function draw_triangle(x, y, w, h) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + w / 2, y + h / 2);
    ctx.lineTo(x, y + h);
    ctx.closePath();
    ctx.fill();
  }

  function draw() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";
    draw_triangle(canvas.width / 2 - 50, canvas.height / 2 - 150, 300, 300);

    ctx.fillStyle = "#4790FF";
    draw_triangle(canvas.width / 2 - 20, canvas.height / 2 - 150, 300, 300);
  }
})();
