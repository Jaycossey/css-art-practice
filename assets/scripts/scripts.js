// GLOBALS -------------------------------------------------------

// Root div for all content
const ROOT_DIV = document.getElementById('root');

// Welcome text string
const hello = "$ Hello, World! My name is Ian, I am a Front End Developer. Hit return to begin...";

// Username storage:
let userName;


// WELCOME FUNCTIONS --------------------------------------------

// clear screen function
function clearScreen() {
    $('#root').empty();
}

// Welcome user to site
function welcomeText() {
    // create element to welcome user
    let pEl = document.createElement('h1');
    pEl.className = "welcome";
    ROOT_DIV.append(pEl);
    
    // Print welcome message 1 char per 100ms
    for (let i = 0; i < hello.length; i++) {
        setTimeout(() => {
            pEl.textContent += hello[i];
        }, 60 * i);
    }
    document.addEventListener('keypress', handleStart);
    return;
}

// event listener to handle start of program
function handleStart() {
    // conditional for return key
    if (event.key === 'Enter') {
        // prompt name and remove listener
        promptName();
        document.removeEventListener('keypress', handleStart);     
    }
}

// event listener for username
function handleUser() {
    if(event.key === 'Enter') {
        userName = event.target.value;
        clearScreen();
        loadScreen();
    }
}

// Step 1
function promptName() {
    // create prompt text el
    let pEl = document.createElement('p');
    pEl.className = "welcome"

    // create input el
    let inputEl = document.createElement('input');
    inputEl.id = "userName";
    inputEl.className = "input";
    inputEl.placeholder = "$";
    inputEl.value = "";

    // default value text
    let value = "$ Enter your name and hit return or click the icons to work with me!";

    for (let i = 0; i < value.length; i++) {
        setTimeout(() => {
            pEl.innerHTML += value[i];
        }, 60 * i);
    }

    // append element and focus
    ROOT_DIV.append(pEl, inputEl);
    inputEl.focus();

    // event listener to handle username
    inputEl.addEventListener('keypress', handleUser);
}


// FIRE STORY  FUNCTIONS --------------------------------------

// initial load screen to begin "story" 
function loadScreen() {
    // clear background color
    ROOT_DIV.style.backgroundColor = "black";
    
    // Create div for "load" and append
    let loadDiv = document.createElement('div');
    loadDiv.className = "loading";
    ROOT_DIV.append(loadDiv);

    // create text display
    let pEl = document.createElement('p');
    pEl.className = "loadText";
    pEl.textContent = "Welcome, " + userName;
    ROOT_DIV.append(pEl);

    // Set Timeout before next call
    setTimeout(() => {
        clearScreen();
        fireStory();
    }, 5000)
}

// clear fire and call next trigger after a second
function extinguishFire() {
    clearScreen();
    setTimeout(() => {
        cabinStory();
    }, 1000);
}

// create fire element and add event listener
function fireStory() {
    // Create P element to store text
    let pEl = document.createElement('p');
    pEl.className = "storyText";
    pEl.innerText = userName + " could smell smoke, they opened their eyes to see a single flame.";

    // create div to handle fire "image and animation"
    let fireDiv = document.createElement('div');
    fireDiv.className = "fire";

    // onclick, extinguish trigger.
    fireDiv.addEventListener('click', extinguishFire);

    ROOT_DIV.append(fireDiv, pEl);
}


// CABIN STORY FUNCTIONS --------------------------------------

// handle click for office items
function handleOfficeClick(event) {
    console.log(event.target);
    if (event.target.id === "portfolio") {
        displayPortfolio();
    } else if (event.target.id === "story") {
        continueCSS();
    }
}

// create new text
function cabinStory() {
    let officeText = "What seemed at first to be a cabin, was just the office, " + userName + " sighed with relief. It was a strange dream."

    // Render story text and append
    let pEl = document.createElement('p');
    pEl.className = "storyText";
    pEl.innerHTML = userName + " could no longer see. Their eyes needed to adjust to the darkness.";
    ROOT_DIV.append(pEl);

    // Create Cabin divs - create 1 base, 2 windows, 1 door
    let cabinDiv = document.createElement('div');
    cabinDiv.classList = "cabin";
    let windowDiv = document.createElement('div');
    windowDiv.id = "portfolio";
    windowDiv.classList = "window";
    let doorDiv = document.createElement('div');
    doorDiv.id = "story";
    doorDiv.classList = "door";

    cabinDiv.append(doorDiv, windowDiv);

    setTimeout(() => {
        ROOT_DIV.append(cabinDiv);
        changeText(pEl, officeText);
    }, 5000);

    cabinDiv.addEventListener('click', handleOfficeClick);
}

function changeText(target, text) {
    target.innerText = text;
}


// PORTFOLIO FUNCTION ------------------------------------------

// Display portfolio 
function displayPortfolio() {
    console.log("portfolio trigger");
}


// REMAINING STORY HANDLE --------------------------------------

// Handle remaining CSS story
function continueCSS() {
    console.log("CSS Story continue trigger");
}

// FUNCTION CALLS ---------------------------------------------
welcomeText();