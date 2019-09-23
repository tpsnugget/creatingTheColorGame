var colors = ["rgb(255, 0, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
   "rgb(0, 255, 255)", "rgb(0, 0, 255)", "rgb(255, 0, 255)"]

pickedColor = selectColor()
colorDisplay.textContent = pickedColor

for (var i = 0; i < container.childElementCount; i++) {
   container.children[i].style.backgroundColor = colors[i]

   // Add click listeners to each square
   container.children[i].addEventListener("click", function () {
      var clickedColor = this.style.backgroundColor

      // Compare clickedColor to pickedColor
      if (clickedColor === pickedColor) {
         console.log("Correct!")
      }
      else { console.log("Wrong!") }
   })
}

function selectColor() {
   return colors[3]
}
