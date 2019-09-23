var colors = []

var numSquares = 6

for (var i = 0; i < numSquares; i++) {
   colors.push(pickRandomColor())
}

pickedColor = pickColor() 
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
      }
   })
}

function pickColor() {
   var random = Math.floor(Math.random() * container.childElementCount)
   return colors[random]
}

function pickRandomColor() {
   var rgb = "rgb("

   for (var i = 0; i < 3; i++) {
      rgb += Math.floor(Math.random() * 256)
      if (i < 2) {
         rgb += ", "
      }
   }
   rgb += ")"
   return rgb
}

function changeColors() {
   for (var j = 0; j < container.childElementCount; j++) {
      container.children[j].style.backgroundColor = pickedColor
   }
   myH1.style.backgroundColor = pickedColor;
}