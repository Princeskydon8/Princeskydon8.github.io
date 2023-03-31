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
 
  let images = document.querySelectorAll('.slider-container img');
  let buttons = document.querySelectorAll('.slider-controls button');
  
  function setActive(index) {
    for (let i = 0; i < images.length; i++) {
      images[i].style.opacity = 0;
      buttons[i].classList.remove('active');
    }
    images[index].style.opacity = 1;
    buttons[index].classList.add('active');
  }
  
  let index = 0;
  setInterval(function() {
    index++;
    if (index >= images.length) {
      index = 0;
    }
    setActive(index);
  }, 5000);
  