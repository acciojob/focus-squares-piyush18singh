//your JS code here. If required.
// Select all squares
const squares = document.querySelectorAll(".square");

// Loop through each square
squares.forEach((square, index) => {
  
  // When mouse goes inside a square
  square.addEventListener("mouseenter", () => {
    squares.forEach((sq, i) => {
      if (i === index) {
        sq.style.backgroundColor = "#E6E6FA"; // keep Lavender for hovered
      } else {
        sq.style.backgroundColor = "#6F4E37"; // Coffee for others
      }
    });
  });

  // When mouse leaves the square
  square.addEventListener("mouseleave", () => {
    squares.forEach(sq => {
      sq.style.backgroundColor = "#E6E6FA"; // Reset to Lavender
    });
  });

});
