# Version 1: Initial commit of readme.md

# Chapter 196, Creating the Color Game, Pt 2
   I made a class="container", but Colt made an id="container"
   
   He did not start out using Bootstrap and I did, he made 6 divs all with class="square"

   He used CSS to style the squares and put them in a 2 x 3 grid

   Added the h1 title

   Then moved to adding javascript to give each square a different color
      Created an array of six rgb() colors var colors = ["rgb(x, x, x)"]
      Added one of the 6 colors to the h1 using a <span></span>
      Added the click events to each square
      Add IF to compare clicked color to pickedColor that is displayed at the top
         of the page in the h1
         If they are the same we will do one thing
         If they are not the same we will do something else

# Chapter 197, Creating the Color Game, Pt 3
   What if we pick the wrong color?
      Remove the square by making it match the background color
   Well, I got a little excited and went ahead and found the index of the square
      when the correct selection is made, but I guess I need to find the index of
      the clicked square when it is wrong as well.

   Wrong again, I don't need to get the index unless I want to do things more manually.
      He used the this operator to generate one line of code instead of my multiple
      lines of code. I expect good coders do it his way and not my way.

   Add in the "Try Again!" or "Correct!" text below the h1
   When correct color is selected, change all square to that correct color
      Also change the background of the h1
   Now pick random colors
   Have h1 update and it should work even though the colors array is still hardcoded

# Chapter 198, Creating the Color Game, Pt 4
   Generate 6 random colors for the game
   Did it on my own!!