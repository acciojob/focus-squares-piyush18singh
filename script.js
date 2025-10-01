const squares = document.querySelectorAll(".square");

squares.forEach(square => {
  // Use mouseover instead of mouseenter
  square.addEventListener("mouseover", () => {
    squares.forEach(sq => {
      if (sq === square) {
        sq.style.backgroundColor = "rgb(230, 230, 250)"; // Lavender
      } else {
        sq.style.backgroundColor = "rgb(111, 78, 55)"; // Coffee
      }
    });
  });

  // mouseout works fine
  square.addEventListener("mouseout", () => {
    squares.forEach(sq => {
      sq.style.backgroundColor = "rgb(230, 230, 250)"; // Reset all to Lavender
    });
  });
});
