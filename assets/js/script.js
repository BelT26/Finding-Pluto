//html elements in intro container
const introContainer = document.getElementById('intro-container');
const rulesButton = document.getElementById('rules-button');

//html elements in rules container
const rulesContainer = document.getElementById('rules-container');
const startButton = document.getElementById('start');

//game container div
const gameContainer = document.getElementById('game-container');

//html elements in fuel gauge
const gauge = document.getElementById('gauge');
const fuelGauge = document.getElementById('fuel-in-gauge');
const fuelNumber = document.getElementById("fuel-number");

//html elements in quiz container
const questionImage = document.getElementById('question-image');
const questionText = document.getElementById('question-text');
const answerA = document.getElementById('A');
const answerB = document.getElementById('B');
const answerC = document.getElementById('C');


//html elements in planet stats
const planetImg = document.getElementById('planet-img'); 
const planetName = document.getElementById('planet-name');
const size = document.getElementById('size');
const year = document.getElementById('year');
const day = document.getElementById('day');
const distance = document.getElementById('distance');
const type = document.getElementById('type');

//html elements for flight path
const progressContainer = document.getElementById('progress');
const flightContainer = document.getElementById('flight-container');

//html modal elements
const correctModal = document.getElementById('correct');
const answerInfo = document.getElementById('answer-info');
const tryAgainModal = document.getElementById('incorrect');
const wrongAgainModal = document.getElementById('wrong-again')
const noFuelModal = document.getElementById('no-fuel');
const blastOff = document.getElementById('blast-off');
const tryAgainButton = document.getElementById('try-again');
const tryNextButton = document.getElementById('try-next');
const quitButtons = document.getElementsByClassName('quit');
const continueButton = document.getElementById('continue');
const endGameModal = document.getElementById('end-game');
const reachPlutoModal = document.getElementById('reach-pluto');
const finalFuel = document.getElementById('final-fuel');
const finalComment = document.getElementById('final-comment');
const playAgainButton = document.getElementById('play-again');

//date variable for use in question about Neptune
let date = new Date();
let currentYear = date.getFullYear();


//multi dimensional array containing quiz question objects
const questions = [
    [
        {
            question: 'Mercury is the ______ planet in the solar system',
            qImg: '',
            aAnswer: 'smallest',
            bAnswer:'hottest',
            cAnswer:'largest',
            correct:'A',
            info: 'Although Mercury is bigger than Pluto, which is a dwarf planet, it is only about a third of the size of the earth',
        },
        {
            question: 'In which item would you find the metal mercury used?',
            qImg: '',
            aAnswer: 'microwave',
            bAnswer:'thermometer',
            cAnswer:'radiator',
            correct:'B',
            info: 'Mercury is used in thermometers as it expands and contracts according to the temperature',
        },
        {
            question: 'Mercury is the fastest planet to orbit the sun taking just 88 days.  How many birthdays would you have on Mercury in one earth year?',
            qImg: '',
            aAnswer: '2',
            bAnswer:'3',
            cAnswer:'4',
            correct:'C',
            info: 'With 4 birthdays per Earth year. You\'d have plenty of parties and presents on Mercury!'
        },
    ],
    [
        {
            question: 'Venus is the ________ planet in the solar system',
            qImg: '',
            aAnswer: 'hottest',
            bAnswer:'smallest',
            cAnswer:'coldest',
            correct:'A',
            info: 'Despite being further from the sun, Venus is hotter than Mercury as it has a thick atmosphere of carbon dioxide that keeps the heat in',
        },
        {
            question: 'Venus is sometimes called this planet\'s twin as they are very similar in size',
            qImg: '',
            aAnswer: 'Neptune',
            bAnswer:'Earth',
            cAnswer:'Mars',
            correct:'B',
            info: 'Venus is about 90% of the size of the earth',
        },
        {
            question: 'There\'s something unusual about the way Venus is spinning.  Can you guess what it is?',
            qImg: '',
            aAnswer: 'It spins the opposite way to Earth',
            bAnswer:'It spins on its side',
            cAnswer:'It\'s the fastest spinning planet in the solar system',
            correct:'A',
            info: 'The Earth rotates from west to east whilst Venus rotates from east to west.',
        },
    ],
    [
        {
            question: 'Splash!!! Plutina\'s spaceship belly flops into the ocean!  It\'s very wet here she thinks!  Do you know what percentage of the Earth\'s surface is covered in water?',
            qImg: '',
            aAnswer: '51%',
            bAnswer:'61%',
            cAnswer:'71%',
            correct:'C',
            info: 'With water covering over 70% of it\'s surface, Earth is sometimes referred to as the "blue planet"', 
        },
        {
            question: 'Wow! It\'s very crowded here compared the sparsely inhabited world of Pluto.  About how many people do think inhabit the earth',
            qImg: '',
            aAnswer: '700 million',
            bAnswer:'8 billion',
            cAnswer:'3 trillion',
            correct:'B',
            info:  '100 years ago there were under 2 billion people on earth, meaning the word\'s population has quadrupled since then', 
        },
        {
            question: 'Earth is the first planet on Plutina\'s journey that has its own moon. Do you know when a man first walked on the moon?',
            qImg: '',
            aAnswer: '1969',
            bAnswer:'1979',
            cAnswer:'1989',
            correct:'A',            
            info: 'Neil Armstrong was the first man to set foot on the moon on July 20th 1969'
        },
      
    ],
    [
        {
            question: 'Mars has a distinctive reddish brown colour because of this it is also know as...',
            qImg: '',
            aAnswer: 'the rusty planet',
            bAnswer:'the red planet',
            cAnswer:'the fiery planet',
            correct:'B',
            info: 'Mars is red because its surface contains rusty iron oxide'
        },
        {
            question: 'Mars is home to Olympus Mons the largest volcano in the solar system.  How many times bigger than Mount Everest do you thinkit could be?',
            qImg: '',
            aAnswer: '2.5',
            bAnswer:'5',
            cAnswer:'10',
            correct:'A',
            info: 'Mount Everest is 8,489m whilst Olmpus Mons is about 22km high'
        },
        {
            question: 'There\'s somebody else out here.  Plutina has just bumped into Nasa\'s latest space rover Perseverance.  Perseverance is busy trying to extract a gas from the atmosphere on Mars that could be used to allow astronauts on future explorations of the planet to breathe.  Which gas is Perseverance trying to extract?',
            qImg: '',
            aAnswer: 'Nitrogen',
            bAnswer:'Hydrogen',
            cAnswer:'Oxygen',
            correct:'C',
            info: 'Only a limited amount of oxygen can be carried on a space craft. If a way is found of extracting oxygen, astronauts will be able to complete longer missions to Mars'
        },
    ],
    [
        {
            question: 'As Plutina\'s ship docks on one of Jupiter\'s moons she spots a huge red spot. If she moved closer what would she find there?',
            qImg: '',
            aAnswer: 'A storm',
            bAnswer: 'A crater',
            cAnswer:'A lake',
            correct:'A',
            info: 'The red spot is about 1.3 times the size of Earth and the fierce winds rage at nearly 300 miles per hour!'
        },
        {
            question: 'Jupiter is the immense giant of the solar system.  How many planets the size of the Earth do you think could fit inside Jupiter?',
            qImg: '',
            aAnswer: '195',
            bAnswer:'450',
            cAnswer:'1300',
            correct:'C',
            info: 'The surface of Jupiter is a massive 23,714 million square miles!'
        },
        {
            question: 'Plutina isn\'t able to land her spacecraft on Jupiter so she docks instead on Ganymede, the largest of Jupiter\'s 79 moons.  Why do you think she was unable to touch down on Jupiter?',
            qImg: '',
            aAnswer: 'It\'s made of water',
            bAnswer:'It\'s made of gas',
            cAnswer:'It has no gravity',
            correct:'B',
            info: 'Whilst the planets we\'ve visited up until now have been solid, Jupiter, Saturn, Uranus and Neptune are all known as gas giants.'
        },
    ],
    [
        {
            question: 'What lovely rings Saturn has!  But what are them made of?',
            qImg: '',
            aAnswer: 'Ice and rocks',
            bAnswer:'Gas',
            cAnswer:'Rays of light',
            correct:'A',
            info: 'The icy chunks that make up the rings can be as small as a particle of dust or larger than a house.'
        },
        {
            question:'If you could find an ocean large enough to put Saturn in what do you think would happen to it?',
            qImg: '',
            aAnswer: 'It would dissolve',
            bAnswer:'It would float',
            cAnswer:'It would sink',
            correct:'B',
            info: 'Saturn is the least dense of all the planets and is lighter than water.'
        },
        {
            question: 'As well as being surrounded by beautiful rings, Saturn has lot of moons orbiting around it.  How many do you think there are?',
            qImg: '',
            aAnswer: '82',
            bAnswer:'54',
            cAnswer:'21',
            correct:'A',
            info: 'Saturn has more moons than any other planet in the solar system. Jupiter is the next closest with 79 moons'
        },
    ],
    [
        {
            question: 'Plutina\'s head is starting to spin on Uranus.  Something doesn\'t feel quite right.  What could be causing the strange sensation?',
            qImg: '',
            aAnswer: 'It is the fastest spinning planet',
            bAnswer:'It changes the direction it spins',
            cAnswer:'It spins on its side',
            correct:'C',
            info: 'Uranus is the only planet to spin on its side. Because of this half of the planet is in darkness for 42 years!'
        },
        {
            question: 'It\'s a bit lonely over in Uranus as it doesn\'t get many visitors.  How many times do you think a space ship from Earth has visited here',
            qImg: '',
            aAnswer: '0',
            bAnswer:'1',
            cAnswer:'3',
            correct:'B',
            info: 'In 1986 NASA\'s Voyager 2 made the first and only mission to Uranus.'
        },
        {
            question: 'Uranus is the ________ planet',
            qImg: '',
            aAnswer: 'Stormiest',
            bAnswer:'Coldest',
            cAnswer:'Largest',
            correct: 'B',
            info: 'The average temperature on Uranus is -216 degrees centigrade.  Winter on Uranus lasts around 20 Earth years. Brrrr',
        },
    ],
    [
        {
            question: 'Neptune takes the longest time of all planets to orbit the sun.  One year on Neptune is the same as 165 years on earth. What year would it have been on Earth one Neptunian year ago?',
            qImg: '',
            aAnswer: currentYear-165,
            bAnswer: currentYear-155,
            cAnswer: currentYear-145,
            correct:'A',
            info: `If you started counting from now, the next year on Neptune would begin in ${currentYear + 165}`
        },
        {
            question: 'There\'s quite a storm here on Neptune.  Best not hang around too long or Plutina may be blown away. What speed do you think the winds on Neptune can reach?',
            qImg: '',
            aAnswer: '400 mph',
            bAnswer:'800 mph',
            cAnswer:'1200 mph',
            correct:'C',
            info: 'The winds on Neptune are so fast that they break the sound barrier'
        },
        {
            question: 'Neptune was named after the roman god of ...',
            qImg: '',
            aAnswer: 'the sea',
            bAnswer:'war',
            cAnswer:'travel',
            correct:'A',
            info: 'The roman sea god Neptune is the brother of Pluto, the god of the underworld, after whom Plutina\'s home was named'
        }
        
    ],
        
]


//variables to determine which question to display. Questions are related to the planet the user has just reached. Each planet has three possible questions one of which is selected at random.
let planetQIndex = 0;
let qIndex = Math.floor(Math.random()*3);
let currentQuestion = questions[planetQIndex][qIndex];

//set the image and the text of the questions and answers
function displayQuestion() {
    questionImage.innerHTML = `<img src="${currentQuestion.qImg}">`
    questionText.innerText = currentQuestion.question;
    answerA.innerText = currentQuestion.aAnswer;
    answerB.innerText = currentQuestion.bAnswer;
    answerC.innerText = currentQuestion.cAnswer;
}

displayQuestion();

//variables to set and display gauge and fuel level
let currentFuel = 1;
const maxFuel = 10;
const gaugeHeight = 250;
const fuelUnit = gaugeHeight / maxFuel;

fuelNumber.innerHTML = `<h2>${currentFuel}</h2>`;



//functions to amend fuel

//updates both the fuel number and the height of the fuel showing in the fuel gauge
function updateFuelDisplay() {
    fuelNumber.innerHTML = `<h2>${currentFuel}</h2>`;
    fuelGauge.style.height = fuelUnit * currentFuel + "px";
    if (currentFuel === 0) {
        fuelGauge.style.display = 'none';
    } else {
        fuelGauge.style.display = 'block';
    }  
}

function resetFuel() {
    currentFuel = 1;
    updateFuelDisplay();
}

//adds 1 to the fuel and updates the display
function addFuel() {
    if (currentFuel < maxFuel) {
    currentFuel++;
    updateFuelDisplay();
    }
}

//decrements fuel by 1. If fuel is already at 0 moves user back to previous planet
function loseFuel() {
    currentFuel--;
    updateFuelDisplay();
}


//variable to keep track of current stats to display
let currentStatsIndex = 0;

//array of objects containing an image and information about each planet
const planetStats = [
    {
        name: 'Mercury',
        imgSrc: 'assets/images/flight1.jpg',
        dayLength: '59 days',
        yearLength: '88 days',
        size: '4,879',
        distance: '58 million',
        type: 'terrestrial'    
    },
    {
        name: 'Venus',
        imgSrc: 'assets/images/flight2.jpg',
        size: '12,104',
        yearLength: '243 days',
        dayLength: '224 days',
        distance: '108 million',
        type: 'terrestrial'
    },
    {
        name: 'Earth',
        imgSrc: 'assets/images/flight3.jpg',
        size: '12,756',
        yearLength: '365.25 days',
        dayLength: '24 hours',
        distance: '150 million',
        type: 'terrestrial'
    },
    {
        name: 'Mars',
        imgSrc: 'assets/images/flight4.jpg',
        size: '6,792',
        dayLength: '24.6 hours',
        yearLength: '687 days',
        distance: '228 million',
        type: 'terrestrial'
    },
    {
        name: 'Jupiter',
        imgSrc: 'assets/images/flight5.jpg',
        size: '142,984',
        dayLength: '10 hours',
        yearLength: '12 years',
        distance: '779 million',
        type: 'gas giant'
    },
    {
        name: 'Saturn',
        imgSrc: 'assets/images/flight6.jpg',
        size: '120,536',
        dayLength: '10.6 hours',
        yearLength: '29 years',
        distance: '1,434 million',
        type: 'gas giant'        
    },
    {
        name: 'Uranus',
        imgSrc: 'assets/images/flight6.jpg',
        size: '51,118',
        dayLength: '17 hours',
        yearLength: '84 hours',
        distance: '2,873 million',
        type: 'ice giant'
    },
    {
        name: 'Neptune',
        imgSrc: 'assets/images/flight8.jpg',
        size: '49,528',
        dayLength: '16 hours',
        yearLength: '165 years',
        distance: '4,495 million',
        type: 'ice giant'
    },
]    
let pl = planetStats[currentStatsIndex];

//sets content of planet stats by retrieving information from planetStats array

function displayStats() { 
planetImg.innerHTML = `<img src = "${pl.imgSrc}" width="150px">`
planetName.innerText = pl.name;
planetName.style.fontFamily = 'Nova Square';
planetName.style.textAlign = 'center';
size.innerText = pl.size;
year.innerText = pl.yearLength;
day.innerText = pl.dayLength;
distance.innerText = pl.distance;
type.innerText = pl.type;
}

displayStats()

//changes the planet displayed in the planet stats section
function nextPlanetStats() {
    currentStatsIndex++;
    pl = planetStats[currentStatsIndex];
    displayStats()
}

function previousPlanetStats() {
    currentStatsIndex--;
    pl = planetStats[currentStatsIndex];
    displayStats()
}

//set content of flight path

//Array with a list of planet names
const flightPathPlanetNames = ['Sun', 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];

/*empty array to contain divs created within a loop containing each planets name and image. Created so that the active planet
can be higlighted and modified by functions*/
const flightPathPlanets = [];



/*for loop that loops through the list of planet names and creates a div element to each planet.
An img element and span element that contain the image and name of each planet are created and appended to the div.
The loop styles the divs and determines the image height. 
The divs are appended to the flightContainer div and pushed to the flightPathPlanets array. */
for(let i=0; i<flightPathPlanetNames.length; i++) {
    const flightPlanet = document.createElement('div');
    flightPlanet.style.textAlign = 'center';
    flightPlanet.style.padding = '5px';
    const planetLabel = document.createElement('span');
    planetLabel.textContent = flightPathPlanetNames[i];
    planetLabel.style.display = 'block';
    planetLabel.style.fontFamily = 'Nova Square';
    const newImg = document.createElement('img');
    newImg.style.height = '70px';
    newImg.src = `assets/images/flight${i}.png`;    
    flightPlanet.appendChild(newImg);
    flightPlanet.appendChild(planetLabel);
    flightContainer.appendChild(flightPlanet);
    flightPathPlanets.push(flightPlanet);
}

let currentProgress = 1;
let activePlanet = flightPathPlanets[currentProgress];
activePlanet.classList.add('active');

//hides the initial introduction and displays the rules of the game
function showRules() {
    introContainer.classList.add('hide');
    rulesContainer.classList.remove('hide');
}

//hides the rules and displays the game elements
function startGame() {
    rulesContainer.classList.add('hide');
    gameContainer.classList.remove('hide');
    flightContainer.classList.remove('hide');
}

rulesButton.addEventListener('click', showRules)
startButton.addEventListener('click', startGame);


//set the initial number of available attempts to answer question to 2. 
let tries = 2;


/*Check if the answer given matches the correct answer.  
if answer is correct, display a success message as a modal.
If answer is incorrect decrement number of tries by 1. If remaining tries are greater than 0 display a modal to enable user to try again.  
If remaining tries are 0, decrement fuel by 1 and display 'wrong again' modal.
If fuel is already at 0 and current planet is not Mercury display a modal to inform user that they are moving back a planet*/
function checkAnswer(e) {
    if (e.target.id === currentQuestion.correct) {
        hideGame();
        answerInfo.innerText = currentQuestion.info;
        correctModal.classList.remove('hide');         
    } 
    else {
        tries --;
        if (tries > 0) {
            hideGame();
            tryAgainModal.classList.remove('hide');        
        } 
        else {
            if (currentFuel > 0) {
                loseFuel();
                hideGame();
                wrongAgainModal.classList.remove('hide');
            }
            else {
                if (planetQIndex === 0) {
                    hideGame();
                    wrongAgainModal.classList.remove('hide');
                }
                else {
                hideGame();
                noFuelModal.classList.remove('hide');
                }
            }
        }
    }  
}

function hideGame() {
    gameContainer.classList.add('hide');
    flightContainer.classList.add('hide');
}

function showGame() {
    gameContainer.classList.remove('hide');
    flightContainer.classList.remove('hide');
}

//update question index variables and display new question for next planet
function updateQuestion() {
    planetQIndex++;
    qIndex = Math.floor(Math.random()*3);
    currentQuestion = questions[planetQIndex][qIndex];
    displayQuestion()
}

//event listeners for answer buttons
answerA.addEventListener('click', checkAnswer);
answerB.addEventListener('click', checkAnswer);
answerC.addEventListener('click', checkAnswer);

//functions to update currentProgress variable and active planet on flight path
function advanceFlightPath() {
    activePlanet.classList.remove('active');
    currentProgress++; 
    activePlanet = flightPathPlanets[currentProgress];
    activePlanet.classList.add('active');
}

function retreat () {
    noFuelModal.classList.add('hide');
    showGame();
    activePlanet.classList.remove('active');
    currentProgress--; 
    activePlanet = flightPathPlanets[currentProgress];
    activePlanet.classList.add('active');
    planetQIndex--;
    qIndex = Math.floor(Math.random()*3);
    currentQuestion = questions[planetQIndex][qIndex];
    displayQuestion();
    previousPlanetStats();
}

//changes the planet displayed in the planet stats section
function changePlanetStats() {
    currentStatsIndex++;
    let pl = planetStats[currentStatsIndex];
    planetImg.innerHTML = `<img src = "${pl.imgSrc}" width="150px">`
    planetName.innerText = pl.name;
    size.innerText = pl.size;
    year.innerText = pl.yearLength;
    day.innerText = pl.dayLength;
    distance.innerText = pl.distance;
    type.innerText = pl.type;
}

/*functions to move to next level after correctly answering question. 
Hides success modal.
Increments fuel level by one.
If the next planet is Pluto activates reachPluto function to inform user that they have successfully completed their mission. 
Otherwise, moves active class on flight path to next planet. Updates the planet stats and question displayed. Resets number of tries*/

function triggerBlastOff() {
    if (planetQIndex == 7) {
        if (tries > 0) {
            addFuel();
        }
        hideGame(); 
        reachPluto();         
    }
    else {
    correctModal.classList.add('hide');
    showGame();
    addFuel();
    advanceFlightPath();
    changePlanetStats();
    updateQuestion();
    tries = 2;
    }
}

/* hides modal to give user a second attempt to give a correct answer */
function secondTry() {
    tryAgainModal.classList.add('hide');
    showGame();
}

/* after 2 incorrect tries, hides the wrong answer modal, updates the question by generating a new question index but using the
same planet index. Resets the number of tries to 2 */
function secondQuestionSamePlanet() {
    wrongAgainModal.classList.add('hide')
    qIndex = Math.floor(Math.random()*3);
    currentQuestion = questions[planetQIndex][qIndex];
    tries = 2;
    showGame();
    displayQuestion();
}

// sets a message to display to the user depending on the fuel remaining
let finalMessage = ''; 

switch(currentFuel) {
    case 0:
        finalMessage = 'No fuel remaining';
        break;
    case 1:
    case 2:
    case 3:
        finalMessage = 'Well done!';
        break;
    case 4:
    case 5:
    case 6:
        finalMessage = 'A great score!';
        break;
    case 7:
    case 8:
        finalMessage = 'A fantastic voyage! Your planetary knowledge is amazing!';
        break;
    case 9:
        finalMessage = 'The perfect score!  Absolutely out of this world!';
        break;
    default:
        finalMessage = 'Fuel gauge malfunction!';                                
}


function reachPluto() {
    hideGame(); 
    if (currentFuel > 0) { 
    finalFuel.innerText = `You have ${currentFuel} fuel units in the tank`;
    }
    finalComment.innerText = finalMessage;
    reachPlutoModal.classList.remove('hide');
}

function endGame() {
    wrongAgainModal.classList.add('hide');
    endGameModal.classList.remove('hide');
}

//add event listeners to modal buttons
blastOff.addEventListener('click', triggerBlastOff);
tryAgainButton.addEventListener('click', secondTry);
tryNextButton.addEventListener('click', secondQuestionSamePlanet);
for (button of quitButtons) {
    button.addEventListener('click', endGame);
}
continueButton.addEventListener('click', retreat);
