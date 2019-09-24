var colors = []

var numSquares = 6

easyButton.addEventListener("click", function() {
   easyButton.classList.add("selectedButton")
   hardButton.classList.remove("selectedButton")
   numSquares = 3
   generateColorSquares()
})

hardButton.addEventListener("click", function() {
   easyButton.classList.remove("selectedButton")
   hardButton.classList.add("selectedButton")
   numSquares = 6
   generateColorSquares()
})

generateColorSquares()

// This generates the array of 3, 6, 9 ... squares
function generateColorSquares() {
   // Call the function to create the proper number of DOM squares
   createDOMSquares()

   if (colors.length > 1) {
      colors = []
   }
   for (var i = 0; i < numSquares; i++) {
      colors.push(pickRandomColor())
      updateDOM()
   }
}

// This generates the proper number of squares in the DOM
function createDOMSquares() {
   // Delete any old DOM squares to avoid extra rows
   var numSquaresInDOM = container.childElementCount
   if (numSquaresInDOM > 1) {
      for (var i = 0; i < numSquaresInDOM; i++) {
         container.lastElementChild.remove()
      }
   }

   for (var i = 0; i < numSquares; i++) {
      newDiv = document.createElement("div")
      newDiv.className = "square"
      container.appendChild(newDiv)
   }
}

// This puts the squares on the page
function updateDOM() {

   pickedColor = pickColor()

   // rgb <span> inside the h1
   colorDisplay.textContent = pickedColor

   for (var i = 0; i < numSquares; i++) {
      container.children[i].style.backgroundColor = colors[i]

      // Add click listeners to each square
      container.children[i].addEventListener("click", function () {
         var clickedColor = this.style.backgroundColor

         // Compare clickedColor to pickedColor
         // Correct Selection
         if (clickedColor === pickedColor) {
            // index = colors.findIndex(function (e) {
            //    return e === pickedColor
            // })
            // console.log("Correct! It was square number  " + (index + 1))
            message.textContent = "Correct!"
            resetButton.textContent = "Play Again?"
            changeColors()
         }
         // Wrong Selection
         else {
            // index = colors.findIndex(function (e) {
            //    return e === clickedColor
            // })
            // container.children[index].style.backgroundColor = "#232323";
            this.style.backgroundColor = "#232323";
            message.textContent = "Try Again?"
         }
      })
   }
}


function pickColor() {
   var random = Math.floor(Math.random() * numSquares)
   return colors[random]
}

// Picks a random rgb color and generates the rgb string to pass back to generate
// the collor array
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

// Makes all squares and the h1 the same color as the game color that was chosen
// correctly
function changeColors() {
   for (var j = 0; j < numSquares; j++) {
      container.children[j].style.backgroundColor = pickedColor
   }
   myH1.style.backgroundColor = pickedColor;
}

resetButton.addEventListener("click", function () {
   generateColorSquares()
   resetButton.textContent = "NEW COLORS"
   myH1.style.backgroundColor = "#232323";
})