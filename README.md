# Finding Pluto

## Contents
* Overview
* Features
    * Introduction
    * Rules
    * Fuel Gauge
    * Question Section
        * Modals
    * Planet statistics
    * Flight Path
    * Winning message
* Deployment
* Testing & Bugs
* Credits
* Future Development Opportunities

## Overview

Background - office quiz. General lack of knowledge about the order of planets

Educational game to teach children (and adults!) about the solar system.

Used a story to add interest and incentivise user to continue to end of the game


## Fuel Gauge
When the fuel reached 0 the original effect was not very attractive as a very thin shape remained at the bottom of the gauge
![empty fuel gauge]
I rectified this by including a conditional clause in the updateFuel function that set the display of the fuel to 'none' if the current fuel was ).
The idea for the fuel gauge was taken from the following online tutorial in which a gauge is used to track the amount of time that a user has to answer a question. https://www.codeexplained.org/2018/10/create-multiple-choice-quiz-using-javascript.html


## Questions
 
I based the structure of the question objects and the checkAnswer function on the Code Explained tutorial mentioned in the fuel gauge section above. 

I wanted to include several questions for each of the planets and so I created a multidimensional array for the question objects.

The currentQuestion variable contains two indices.  The first number relates to the index of the planet the user has reached and the second is a random number between 0 and 2.  I used a random number for the second index to make the game more interesting by generating a different sequence of questions each time the user plays.

With time I would like to add separate illustrations by friends' children for each question. I would do this by adding a questionImage property to all of the question objects and update the displayQuestion function to retrieve the image source.

## Planet Stats



## Flight Path
The flight path shows the position of the planets in the solar system. From an educational point it helps the user remember where the planets are located and for the purpose of the game it illustrates their progress.
I was going to manually create the divs and add the image src and title in my HTML file however after watching an online demo in which a loop is used to add images from an API to the DOM I decided to see if a similar method would work for my project.

This is the source code which I used as a base. It is from the Web Developer Bootcamp 2021 by Colt Steele on Udemy.

const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'


for (let i = 1; i <= 151; i++) {
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');
    const label = document.createElement('span');
    label.innerText = `#${i}`;
    const newImg = document.createElement('img');
    newImg.src = `${baseURL}${i}.png`


    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    container.appendChild(pokemon)
}


As I wanted to include the names of the planets under the images, I created an array with the planet names and used the array length as the finishing condition for the loop. As I iterated over each item I added the image height and a class so that I could use css to add styles and used the strings in the array for the label content.

I created an empty array called flightPathPlanets and pushed each planet div into it so that I could use the index to apply an active class to indicate to the user their current location.  

I made a variable called 'current location' which stores the index of the planet that has the active class applied.  This starts off as 1 as the starting location is Mercury, which is the second item in the array.

I created functions to update the current location and apply the active class to the next planet or go back to the previous planet. I tested these by creating temporary buttons and adding event listeners to them.  The buttons have been removed and the functions are called automatically when the user answers correctly and moves to the next planet or the fuel goes below 0 and they move backwards.




## Bugs
problems registering correct answer in quiz - needed to reference e.target.

linking images to js - needed to reference path relative to html file rather than js script

problems connecting to css file - set styles of elements using js.  later discovered missing semi-colon

check answer function not displaying modals. Alerts working correctly Tried validating css through Jigsaw. No errors. console.log('hide removed') working.  dev tools showed that on line 43 of the css file the display was being set to none.  Game container positioning was relative.
added hide class to game container and flight container.

styles not being applied to intro container. does not appear on screen. css validated

info for Neptune not showing. moved clause checking planet index from checkAnswer function to triggerBlastOff.

background container sizing issues for modals.

switch statement not working - needed to wrap in function and call it

Quit buttons - needed to separate them

show stats button - display block commented out as being overridden by hide class. then couldn't get rid of as if added important to display block overrode hide class.  Added reveal class to media queries.

could not get table to appear centered on mobile devices using justify content or auto margins. realised table blank space taking up some of container width so set size of table to autofit content.

User feedback indicated that it was not clear what was meant by day or year in the planet stats section. Added tool tips to provide an explanation and an info icon from Font Awesome. Following code used as a guide for adding tool tips:
https://www.w3schools.com/css/css_tooltip.asp

## Deployment  
The site was deployed to GitHub pages following the steps below: 

* From the project repositoy I navigated to the Settings tab.  
* I selected the Master Branch from the source section drop-down menu.  
* The page refreshed automatically with a message confirming successful deployment.  
* The live link can be found here https://belt26.github.io/Finding-Pluto/

## Credits
The favicon was generated using the flying saucer emoji from favicon.io.

Montserrat and Nova Square fonts were imported from google fonts.

The info icon was imported from Font Awesome.

The sun cartoon image in the flight path is a sticker image from Microsoft Paint 3D.

All other images were downloaded from Pixabay from the following contributors:
* Planet pictures for flight path: Pauolo Cesar Ventura
* Ufo illustration above question: Julieta Mascarella
* Star illustration on final modal: Katherine Ab
* Images for planet stats: WikiImages

Information and inspiration for the questions were taken from the NASA website, National Geographic and www.SciFacts.net. 

## Future development possibilities

* Increase number of questions
* Add individual images to illustrate each question.
*A similar structure could be used for a geography quiz, or a history quiz in which the user travels through time.