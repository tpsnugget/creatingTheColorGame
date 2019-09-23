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