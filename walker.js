// Get the walker image:
var walker = document.getElementById('walker');

// Configure motion params:
var walkingLeft = false;
var leftBorder = 0;
var rightBorder = window.innerWidth - walker.offsetWidth;
var speed = 20;
var xPos = rightBorder;


// The update function is called once every "frame" (via setInterval)
// Changing the walker's position each frame, will cause him to move across the screen
function update() {
  // ensure walker is facing to the right (reverse of "normal")
  // CSS does this for us, we just assign the right class.
  walker.classList.add("reg");

  // Move "speed" pixels per iteration:
  xPos -= speed;
  // Reset back to left side, when we run into right wall
  if(xPos <= leftBorder){
    walker.className ="flip";
    xPos = 21;

  }
  // reposition the walker
  walker.style.left = xPos + "px";
};

// Establish an update interval (framerate)
// This will call the "update" method every 100ms
// Add code to "update" to change the walker's position
setInterval(update, 100);

// Change right border when resized
window.addEventListener("resize", function(){
  rightBorder = window.innerWidth - walker.offsetWidth;
});
