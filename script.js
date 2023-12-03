// Function to create and append square div elements
function createSquares() {
  var container = document.getElementById('container');

  for (var i = 0; i < 16 * 16; i++) {
    var newDiv = document.createElement('div');
    newDiv.classList.add('square');
    container.appendChild(newDiv);
  }

  // Add event listeners to all square elements
  var squares = document.querySelectorAll('.square');

  squares.forEach(function(square) {
    square.addEventListener('mouseenter', function() {
      this.classList.add('hovered');
    });

    // Optionally, if you want the color to persist after hover ends
    square.addEventListener('mouseleave', function() {
      this.classList.add('hovered');
    });
  });
}

// Call the function to create squares when the window loads
window.onload = function() {
  createSquares();
};
