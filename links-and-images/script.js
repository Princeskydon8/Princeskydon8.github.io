function randomColorSwitch() {
    const colors = ["red", "blue", "green", "yellow", "orange", "purple"]; // Array of colors to choose from
    const currentColor = document.body.style.backgroundColor; // Get the current background color
    let newColor = currentColor; // Set a default new color to be the same as the current color
    
    // Keep generating a new random color until it's different from the current color
    while (newColor === currentColor) {
      newColor = colors[Math.floor(Math.random() * colors.length)];
    }
    
    document.body.style.backgroundColor = newColor; // Update the background color
  }
  
  const button = document.getElementById("herewego"); // Get the button element
  button.addEventListener("click", randomColorSwitch); // Add the randomColorSwitch function as a click event listener to the button
  