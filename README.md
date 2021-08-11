# Finding Pluto

https://belt26.github.io/Finding-Pluto/

## Author: Helen Taylor  
## Version 1.0.0

![site preview on a variety of devices](https://github.com/BelT26/Finding-Pluto/blob/main/assets/screenshots/responsive-preview.png)


## Contents
* [Overview](#overview)
* [Planning](#planning)
* [Stucture](#structure)
* [Features](#features)
    * [Introduction](#introduction)
    * [Rules](#rules)
    * [Fuel Gauge](#fuel-gauge)
    * [Question Section](#questions)
        * [Feedback Modals](#feedback-modals)
    * [Planet Statistics](#planet-stats)
    * [Flight Path](#flight-path)
    * [Final message](#final-message)
* [Bugs and challenges](#bugs-and-challenges)
* [Testing](#testing)
* [Deployment](#deployment)
* [Credits](#credits)
* [Future Development Opportunities](#future-development-possibilities)

## Overview
Finding Pluto is an educational game, created to teach children about the solar system. 

The aim of the game is to help a little lost alien, named Nuna, reach her home on Pluto by answering multiple choice questions related to each of the planets in our solar system to earn fuel for her spaceship.  The user starts on Mercury and each time they guess the correct answer they move one planet closer to Nuna's home. If they get the answer correct on their first try they are rewarded with a bonus block of fuel which counts towards their final score. 

I felt that by using a story as a background to the quiz this could engage the user and motivate them to continue to end of the game.

To maximize the educational impact I added a couple of features to the game.  The section next to the quiz container contains statistics about the planet that the user has reached and underneath the quiz the planets are depicted in relation to their position between the sun and Pluto.

Although my main target audience are primary school children older children and adults may also improve their solar system knowledge by playing!

## Planning

The original wireframes can be found in the assets directory.

The game was initially designed to be played on a desktop so that the screen is large enough to display all of the available features.  It was later adapted for tablet and mobile devices.

I initially designed the fuel gauge, questions, planet-stats and flight path independently and tested that they worked before adding them to the game. I later constructed functions that would update all items based on the user's response.

Once the game was working correctly I added and styled the modals. I then adapted the layout and the elements displayed so that the game could be played on smaller devices.

## Structure

The site consists of a single page.  Modals are used for the introduction, rules and various user feedback messages. The appearance of the main game and the modals are controlled by using a CSS 'hide' class that is applied and removed via javascript functions linked to buttons via event listeners.

The site consists of a header displaying the title of the game and a main section displaying either the game elements or a modal.  A footer was omitted as it detracted from the game and did not add any user benefits.

All user input is provided by clicking on buttons rather then entering text, therefore user validation checks have not been included.

## Features

## Introduction

![introduction giving background to the game](https://github.com/BelT26/Finding-Pluto/blob/main/assets/screenshots/introduction.png)

This page sets the scene for the game, explaining how Nuna came to be lost at the other end of the solar system and advising the user how they can help her get home.

I superimposed a picture of Nuna over an image of the solar system to portray her as lost in space.

I chose a simple background with stars to convey the idea of space without detracting from the main content.  The same background is repeated throughout the game.

The introduction is a modal that lays over the main game page that is hidden until the user starts playing. 

## Rules

![section advising users how to play the game](https://github.com/BelT26/Finding-Pluto/blob/main/assets/screenshots/rules.png)
The rules section tells users how they can help Nuna reach Pluto and what happens when they answer questions correctly or incorrectly.

I used a star image for the bullet points to improve the look of the page.

When the user clicks on the 'START MISSION' button the rules are hidden and the game is revealed.

![image of game](https://github.com/BelT26/Finding-Pluto/blob/main/assets/screenshots/main-game.png)

## Fuel Gauge

![image of fuel gauge](https://github.com/BelT26/Finding-Pluto/blob/main/assets/screenshots/fuel-gauge.png)

The fuel gauge reflects the user's current score which increases each time their first guess is correct and decreases if they don't provide the right answer on their second attempt.

When the fuel reached 0 the original effect was not very attractive as a very thin shape remained at the bottom of the gauge

![empty fuel gauge](https://github.com/BelT26/Finding-Pluto/blob/main/assets/screenshots/empty-fuel.png)

I rectified this by including a conditional clause in the updateFuel function that set the display of the fuel to 'none' if the current fuel was 0.

The idea for the fuel gauge was taken from the following online tutorial in which a gauge is used to track the amount of time that a user has to answer a question. https://www.codeexplained.org/2018/10/create-multiple-choice-quiz-using-javascript.html

On mobile and tablet devices the image of the gauge is hidden and just the fuel number is displayed on a background of the sun.

## Questions

![question and answers container](https://github.com/BelT26/Finding-Pluto/blob/main/assets/screenshots/question-container.png)

I based the structure of the question objects and the displayQuestion function on the Code Explained tutorial mentioned in the fuel gauge section above. 

I wanted to include several questions for each of the planets and so I created a multidimensional array for the question objects.

The currentQuestion variable contains two indices.  The first number relates to the index of the planet the user has reached and the second is a random number between 0 and 2.  I used a random number for the second index to make the game more interesting by generating a different sequence of questions each time the user plays.

With time I would like to add separate illustrations by friends' children for each question. I would do this by adding a questionImage property to all of the question objects and update the displayQuestion function to retrieve the image source.

### Feedback Modals
Each time the user submits an answer the main game screen disappears and a modal appears to let them know whether their guess was correct.

![correct answer message](https://github.com/BelT26/Finding-Pluto/blob/main/assets/screenshots/feedback-modals.png)

The modal borders are colour coded - green if the answer is correct, amber if the first guess is wrong and red if the second guess is also incorrect.

Inside the correct answer message additional information is also provided about the answer to add to the educational value of the quiz.  This information is stored in the question objects.

If the user provides 2 incorrect guesses they are given the option to abort the mission and the game will reset.

## Planet Stats

![image of current planet and related statistics](https://github.com/BelT26/Finding-Pluto/blob/main/assets/screenshots/planet-stats.png)

The planet stats section shows a photo and provides the user with extra information about the planet they have reached. Each time the user answers a question correctly the information is updated.

Because of space constraints this information is initially hidden on a mobile device but a button appears allowing the user to open and close the stats.

![mobile previews with stats hidden and displayed](https://github.com/BelT26/Finding-Pluto/blob/main/assets/screenshots/mobile-preview.png)

On a table the stats appear at the top of the page.

![tablet preview displaying planet stats at top](https://github.com/BelT26/Finding-Pluto/blob/main/assets/screenshots/ipad-preview.png)

For each planet in the solar system I created an object containing an image and the statistics and stored them in an array.
The array of objects is used to populate the contents of the html table using the displayStats function.

I decided to keep the statistics rather than the fuel gauge or flight path on devices with smaller screens to maximize the educational impact.

## Flight Path

![illustration of the sun, the planets of the solar system and Pluto](https://github.com/BelT26/Finding-Pluto/blob/main/assets/screenshots/flight-path.png)

The flight path shows the position of the planets in the solar system. From an educational point it helps the user remember where the planets are located and for the purpose of the game it illustrates their progress on their journey to Pluto.

Due to a lack of space, this feature is not available on mobiles or tablets. On these devices the user is still able to view their current location through the planet stats section at the top of the screen.

I originally intended to create the divs and add the image src and title in my HTML file however after watching an  demo in which a loop is used to add images from an API to the DOM I decided to see if a similar method would work for my project.

The code which I used as a base is from the Web Developer Bootcamp 2021 by Colt Steele on Udemy and stored in the assets/source-code/pokemon folder. I then modified it as detailed below:

* As I wanted to include the names of the planets under the images, I created an array with the planet names and used the array length as the finishing condition for the loop. As I iterated over each item I added the image height and a class so that I could use css to add styles and used the strings in the array for the label content.

* I created an empty array called flightPathPlanets and pushed each planet div into it so that I could use the index to apply an active class to indicate to the user their current location.  

* I made a variable called 'current location' which stores the index of the planet that has the active class applied.  This starts off as 1 as the starting location is Mercury, which is the second item in the array.

* I created functions to update the current location and apply the active class to the next planet or go back to the previous planet which are called when the user answers correctly and moves to the next planet or the fuel goes below 0 and they move backwards.

## Final Message

![modal displaying message congratulating user](https://github.com/BelT26/Finding-Pluto/blob/main/assets/screenshots/congratulations.png)

This modal is displayed once the user has correctly answered a question on each planet and successfully completed their mission to help Nuna reach Pluto.

The screen shows the user their final score and displays a custom message of congratulations determined by a switch statement, based on how many fuel units they have showing in their tank.

The play again button hides the modal and resets and displays the game.

## Bugs and Challenges
The biggest challenge for me was to construct functions that brought to together all the elements of the game and ensured that all the relevant features were updated appropriately when the user gave an answer. The more complex functions, such as triggerBlastOff, resetGame and retreat were very lengthy at the start and were refactored.  By breaking down the lines of code that were being repeated and storing them as clearly named functions I hope to have improved the readibility.

The next most challenging issue was how to adapt the game for mobile and tablet devices without affecting the readability or lessening the educational value.  I decided that the main feature to retain along with the question was the planet stats. On mobiles this still took up too much of the screen so I included buttons to hide and show the image and table.  Instead of an image of a fuel gauge I superimposed the current fuel score on top of an image of the sun. 

I encountered several issues constructing the checkAnswer function.  Initially it was not working as I was just checking the event on which the element fired  rather than its target.id.  By inspecting the properties of the element I realised the error, amended the code to check the 'e.target.id' and the function worked as expected.

I originally intended for the feedback modals to appear on top of the game container, with an overlay to obscure the background. The checkAnswer function was not displaying the feedback modals although no errors were showing. I tested the function by replacing the modals with alert messages which appeared without any problems. I suspect that the problem was being caused by the position of the game container and the flight container which was set to relative. To resolve the issue I created a hideGame function to add the hide class and called it within the checkAnswer function.

The images that I added through JavaScript were throwing errors when the page was loaded. By checking the html file in Chrome Developper tools I realised that the problem was being caused as the file paths were relative to the JavaScript file. Once I updated them with the relative paths to the HTML file they loaded correctly.

The background was originally attached to a background container div and was not displaying as intended on modal devices.  I tried to resolve the issue using media queries but wasn't happy with the result.  After contacting tutor support and speaking to Sean the issue was resolved by removing the background container and attaching the background to the body element.

The game was not reloading if the user tried to abort their mission before reaching Pluto. I realised that the problem was being caused by calling the changeActivePlanet function with an argument of -7 within reset game as the currentProgress variable would be lower if somebody quit mid game rather than playing to the end.  I rectified this by setting the progress to 8 before the resetGame function was called in the closeModal function.

Although the other planet stats were displayed correctly the information for Neptune not showing. To solve this issue I moved a clause checking the current planet index from the checkAnswer function to the triggerBlastOff function.

## Testing

### Validator testing  

* HTML
No errors were returned when passing through the official [W3C validator: Finding Pluto](https://validator.w3.org/nu/?doc=https%3A%2F%2Fbelt26.github.io%2FFinding-Pluto%2F).
The 3 warnings about empty headers relate to elements whose content is populated through the javascript file. 

* CSS
No errors were returned when passing through the official [Jigsaw validator: Finding Pluto](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fbelt26.github.io%2FFinding-Pluto%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en).

* The contrast between the font colour of the page heading and it's background were checked using the Webaim contrast checker and scored 10.9:1.[WebAim contrast checker](https://webaim.org/resources/contrastchecker/?fcolor=6EC4F7&bcolor=000000)

* JavaScript
No errors were returned when passing through JSHint.
The following metrics were returned:
- There are 29 functions in this file.
- Function with the largest signature take 1 arguments, while the median is 0.
- Largest function has 17 statements in it, while the median is 3.
- The most complex function has a cyclomatic complexity value of 11 while the median is 1.


### User testing

User feedback indicated that it was not clear what was meant by 'day' or 'year' in the planet stats section. To resolve this issue I added tool tips to provide an explanation and an info icon from Font Awesome to indicate that further information is available. The following code was used as a guide for adding tool tips: https://www.w3schools.com/css/css_tooltip.asp.

When a user tried to play the game again, the planet stats were not being reset to Mercury.  I rectified this by adding the following line of code to the displayStats function: pl = planetStats[currentStatsIndex] and updating the other functions that call displayStats;


## Deployment  
The site was deployed to GitHub pages following the steps below: 

* From the project repository I navigated to the settings tab.  
* I selected the Master Branch from the source section drop-down menu.  
* The page refreshed automatically with a message confirming successful deployment.  
* The live link can be found here https://belt26.github.io/Finding-Pluto/

## Credits
The favicon was generated using the flying saucer emoji from favicon.io.

Montserrat and Nova Square fonts were imported from google fonts.

The info icon was imported from Font Awesome.

The sun cartoon image in the flight path is a sticker image from Microsoft Paint 3D.

All other images were downloaded from Pixabay from the following contributors:
* Planet pictures for flight path: Paulo Cesar Ventura
* Solar system on intro page: MD Herren
* Ufo illustration above question: Julieta Mascarella
* Star illustration on final modal: Katherine Ab
* Space background : Nikiko
* Images for planet stats: WikiImages

Information and inspiration for the questions were taken from the NASA website, National Geographic, www.SciFacts.net and the children of my mentor Maria Hynes. 

## Future development possibilities

* To increase the educational value, more questions could be added for each planet.
* To improve the user experience, individual images could be added to illustrate each question.
* A similar structure could be used for a geography quiz, or a history quiz in which the user travels through time.