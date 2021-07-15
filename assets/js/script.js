
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
const moons = document.getElementById('moons');

//html elements for flight path
const flightContainer = document.getElementById('flight-container');

//date variable for use in question about Neptune
let date = new Date()
let currentYear = date.getFullYear()


//multi dimensional array containing quiz question objects
const questions = [
    [
        {
            question: 'Mercury is the ______ planet in the solar system',
            qImg: '',
            aAnswer: 'smallest',
            bAnswer:'hottest',
            cAnswer:'largest',
            correct:'A'
        },
        {
            question: 'In which item would you find the metal mercury used?',
            qImg: '',
            aAnswer: 'microwave',
            bAnswer:'thermometer',
            cAnswer:'radiator',
            correct:'B'
        },
        {
            question: 'Mercury is the fastest planet to orbit the sun taking just 88 days.  How many birthdays would you have on Mercury in one earth year?',
            qImg: '',
            aAnswer: '2',
            bAnswer:'3',
            cAnswer:'4',
            correct:'C'
        },
    ],
    [
        {
            question: 'Venus is the ________ planet in the solar system',
            qImg: '',
            aAnswer: 'hottest',
            bAnswer:'smallest',
            cAnswer:'coldest',
            correct:'A'
        },
        {
            question: 'Venus is sometimes called this planet\.s twin as they are very similar in size',
            qImg: '',
            aAnswer: 'Neptune',
            bAnswer:'Earth',
            cAnswer:'Mars',
            correct:'B'
        },
        {
            question: 'There\'s something unusual about the way Venus is spinning.  Can you guess what it is?',
            qImg: '',
            aAnswer: 'It spins the opposite way to Earth',
            bAnswer:'It spins on its side',
            cAnswer:'It\'s the fastest spinning planet in the solar system',
            correct:'A'
        },
    ],
    [
        {
            question: 'Splash!!! Plutina\'s spaceship belly flops into the ocean!  It\'s very wet here she thinks!  Do you know what percentage of the Earth\'s surface is covered in water?',
            qImg: '',
            aAnswer: '51%',
            bAnswer:'61%',
            cAnswer:'71%',
            correct:'C'
        },
        {
            question: 'Wow! It\'s very crowded here compared the sparsely inhabited world of Pluto.  About how many people do think inhabit the earth',
            qImg: '',
            aAnswer: '700 million',
            bAnswer:'8 billion',
            cAnswer:'3 trillion',
            correct:'B'
        },
        {
            question: 'earth3',
            qImg: '',
            aAnswer: 'A',
            bAnswer:'B',
            cAnswer:'C',
            dAnswer:'D',
            correct:'B'
        },
      
    ],
    [
        {
            question: 'Mars has a distinctive reddish brown colour because it contains rusty iron because of this it is also know as...',
            qImg: '',
            aAnswer: 'the rusty planet',
            bAnswer:'the red planet',
            cAnswer:'the fiery planet',
            correct:'B'
        },
        {
            question: 'Mars is home to Olympus Mons the largest volcano in the solar system.  How many times bigger than Mount Everest do you thinkit could be?',
            qImg: '',
            aAnswer: '2.5',
            bAnswer:'5',
            cAnswer:'10',
            correct:'A'
        },
        {
            question: 'There\'s somebody else out here.  Plutina has just bumped into Nasa\'s latest space rover Perseverance.  Perseverance is busy trying to extract a gas from the atmosphere on Mars that could be used to allow astronauts on future explorations of the planet to breathe.  Which gas is Perseverance trying to extract?',
            qImg: '',
            aAnswer: 'Nitrogen',
            bAnswer:'Hydrogen',
            cAnswer:'Oxygen',
            correct:'C'
        },
    ],
    [
        {
            question: 'As Plutina\'s ship docks on one of Jupiter\'s moons she spots a huge red spot. If she moved closer what would she find there?',
            qImg: '',
            aAnswer: 'A storm',
            bAnswer: 'A crater',
            cAnswer:'A lake',
            correct:'A'
        },
        {
            question: 'Jupiter is the immense giant of the solar system.  How many planets the size of the Earth do you think could fit inside Jupiter?',
            qImg: '',
            aAnswer: '195',
            bAnswer:'450',
            cAnswer:'1300',
            correct:'C'
        },
        {
            question: 'Jupiter3',
            qImg: '',
            aAnswer: 'A',
            bAnswer:'B',
            cAnswer:'C',
            dAnswer:'D',
            correct:'B'
        },
    ],
    [
        {
            question: 'What lovely rings Saturn has!  But what are them made of?',
            qImg: '',
            aAnswer: 'Ice and rocks',
            bAnswer:'Gas',
            cAnswer:'Rays of light',
            correct:'A'
        },
        {
            question:'If you could find an ocean large enough to put Saturn in what do you think would happen to it?',
            qImg: '',
            aAnswer: 'It would dissolve',
            bAnswer:'It would float',
            cAnswer:'It would sink',
            correct:'B'
        },
        {
            question: 'Saturn3',
            qImg: '',
            aAnswer: 'A',
            bAnswer:'B',
            cAnswer:'C',
            correct:'A'
        },
    ],
    [
        {
            question: 'Plutina\'s head is starting to spin on Uranus.  Something doesn\'t feel quite right.  What could be causing the strange sensation?',
            qImg: '',
            aAnswer: 'Uranus is the fastest spinning planet',
            bAnswer:'Uranus changes the direction it spins once a day',
            cAnswer:'Uranus spins on its side',
            correct:'C'
        },
        {
            question: 'It\'s a bit lonely over in Uranus as it doesn\'t get many visitors.  How many times do you think a space ship from Earth has visited here',
            qImg: '',
            aAnswer: '0',
            bAnswer:'1',
            cAnswer:'3',
            correct:'B'
        },
        {
            question: 'Uranus is the ________ planet',
            qImg: '',
            aAnswer: 'Stormiest',
            bAnswer:'Coldest',
            cAnswer:'Largest',
            correct:'B'
        },
    ],
    [
        {
            question: 'Neptune takes the longest time of all plaents to orbit the sun.  One year on Neptune is the same as 165 years on earth. What year would it have been on Earth one Neptunian year ago?',
            qImg: '',
            aAnswer: currentYear-165,
            bAnswer: currentYear-155,
            cAnswer: currentYear-145,
            correct:'A'
        },
        {
            question: 'There\'s quite a storm here on Neptune.  Best not hang around too long or Plutina may be blown away. What speed do you think the winds on Neptune can reach?',
            qImg: '',
            aAnswer: '400 mph',
            bAnswer:'800 mph',
            cAnswer:'1200 mph',
            correct:'C'
        },
        {
            question: 'Neptune was named after the roman god of ...',
            qImg: '',
            aAnswer: 'the sea',
            bAnswer:'war',
            cAnswer:'travel',
            correct:'A'
        }
        
    ],
        
]
//variables to determine which question to display. Questions are related to the planet the user has just reached. Each planet has three possible questions one of which is selected at random.
let planetQIndex = 0;
let qIndex = Math.floor(Math.random()*3);
let currentQuestion = questions[planetQIndex][qIndex];

//set the image and the text of the questions and answers
questionImage.innerHTML = `<img src="${currentQuestion.qImg}">`
questionText.innerText = currentQuestion.question;
answerA.innerText = currentQuestion.aAnswer;
answerB.innerText = currentQuestion.bAnswer;
answerC.innerText = currentQuestion.cAnswer;


//variables to set and display gauge and fuel level
let currentFuel = 1;
const maxFuel = 10;
const gaugeHeight = 250;
const fuelUnit = gaugeHeight / maxFuel;

fuelNumber.innerHTML = `<h2>${currentFuel}</h2>`;


//variable to keep track of current stats to display
let currentStatsIndex = 0;

//array of objects containing an image and information about each planet
const planetStats = [
    {
        name: 'Mercury',
        imgSrc: 'Assets/Images/flight1.jpg',
        size: '3,031 miles',
        dayLength: '59 days',
        yearLength: '88 days',
        distance: '36 million miles',
        moons: '0'
    },
    {
        name: 'Venus',
        imgSrc: 'Assets/Images/flight2.jpg',
        size: '7,521 miles',
        yearLength: '243 days',
        dayLength: '224 days',
        distance: '67 million miles',
        moons: '0'
    },
    {
        name: 'Earth',
        imgSrc: 'Assets/Images/flight3.jpg',
        size: '7,926 miles',
        yearLength: '365.25 days',
        dayLength: '24 hours',
        distance: '93 million miles',
        moons: '1'
    },
    {
        name: 'Mars',
        imgSrc: 'Assets/Images/flight4.jpg',
        size: '4,222 miles',
        dayLength: '24.6 hours',
        yearLength: '687 days',
        distance: '142 million miles',
        moons: '2'
    },
    {
        name: 'Jupiter',
        imgSrc: 'Assets/Images/flight5.jpg',
        size: '88,846 miles',
        dayLength: '10 hours',
        yearLength: '12 years',
        distance: '483 million miles',
        moons: '79'
    },
    {
        name: 'Saturn',
        imgSrc: 'Assets/Images/flight6.jpg',
        size: '74,900 miles',
        dayLength: '10.6 hours',
        yearLength: '29 years',
        distance: '889 million miles',
        moons: '82'
    },
    {
        name: 'Uranus',
        imgSrc: 'Assets/Images/flight7.jpg',
        size: '31,763 miles',
        dayLength: '17 hours',
        yearLength: '84 hours',
        distance: '1,784 million miles',
        moons: '27'
    },
    {
        name: 'Neptune',
        imgSrc: 'Assets/Images/flight8.jpg',
        size: '30,779 miles',
        dayLength: '16 hours',
        yearLength: '165 years',
        distance: '2,798 miles',
        moons: '14'
    },
]    
const pl = planetStats[currentStatsIndex];

//set content of planet stats
planetImg.innerHTML = `<img src = "${pl.imgSrc}" width="200px">`
planetName.innerText = pl.name;
size.innerText = pl.size;
year.innerText = pl.yearLength;
day.innerText = pl.dayLength;
distance.innerText = pl.distance;
moons.innerText = pl.moons;


//functions for quiz

//show the next question
function displayQuestion() {
    questionImage.innerHTML = `<img src="${currentQuestion.qImg}">`
    questionText.innerText = currentQuestion.question;
    answerA.innerText = currentQuestion.aAnswer;
    answerB.innerText = currentQuestion.bAnswer;
    answerC.innerText = currentQuestion.cAnswer;
}

/*set the initial number of tries to 2. Check if the answer given matches the correct answer. Display a success message as a modal 
if answer is correct. If the next planet is Pluto display message to inform user that they have successfully completed their mission.
If answer is incorrect decrement number of tries by 1. If remaining tries are greater than 0 display a modal to enable user to try again.  
If remaining tries are 0, decrement fuel by 1 and display 'wrong again' modal.*/
tries = 2;
function checkAnswer(e) {
    if (e.target.id === currentQuestion.correct) {
        if(planetQIndex == 7) {
            alert('You reached Pluto!')
        }
        else {
            correctModal.classList.remove('hide')
        }   
    } 
    else {
        tries --;
        if(tries > 0) {
            tryAgainModal.classList.remove('hide')
            
        } else {
            currentFuel--
            updateFuelDisplay()
            wrongAgainModal.classList.remove('hide')
        }
    }  
}

//update question index variables and display new question for next planet
function updateQuestion(){
    planetQIndex++;
    qIndex = Math.floor(Math.random()*4);
    currentQuestion = questions[planetQIndex][qIndex];
    displayQuestion()
}
