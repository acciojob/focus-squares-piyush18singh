const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
  square.addEventListener("mouseenter", () => {
    squares.forEach(sq => {
      if (sq === square) {
        sq.style.backgroundColor = "rgb(230, 230, 250)"; // Lavender in rgb
      } else {
        sq.style.backgroundColor = "rgb(111, 78, 55)"; // Coffee in rgb
      }
    });
  });

  square.addEventListener("mouseleave", () => {
    squares.forEach(sq => {
      sq.style.backgroundColor = "rgb(230, 230, 250)"; // Reset all to Lavender
    });
  });
});
