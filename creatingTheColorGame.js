var colors = ["rgb(255, 0, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
   "rgb(0, 255, 255)", "rgb(0, 0, 255)", "rgb(255, 0, 255)"]

pickedColor = pickColor() //selectColor()
colorDisplay.textContent = pickedColor

for (var i = 0; i < container.childElementCount; i++) {
   container.children[i].style.backgroundColor = colors[i]

   // Add click listeners to each square
   container.children[i].addEventListener("click", function () {
      var clickedColor = this.style.backgroundColor



      // Compare clickedColor to pickedColor
      if (clickedColor === pickedColor) {
         // index = colors.findIndex(function (e) {
         //    return e === pickedColor
         // })
         // console.log("Correct! It was square number  " + (index + 1))
         message.textContent = "Correct!"
         changeColors()
      }
      else {
         // index = colors.findIndex(function (e) {
         //    return e === clickedColor
         // })
         // container.children[index].style.backgroundColor = "#232323";
         this.style.backgroundColor = "#232323";
         message.textContent = "Try Again!"
         // console.log("Wrong, you clicked on square number " + (index + 1) ) 
      }
   })
}

function pickColor() {
   var random = Math.floor(Math.random() * container.childElementCount)
   return colors[random]
}

function changeColors() {
   for (var j = 0; j < container.childElementCount; j++) {
      container.children[j].style.backgroundColor = pickedColor
   }
   myH1.style.backgroundColor = pickedColor;
}