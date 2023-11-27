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

// create new text
function cabinStory() {
    console.log("cabin trigger");
    let pEl = document.createElement('p');
    pEl.innerHTML = userName + " could no longer see.";
    pEl.style.color = "white";
    ROOT_DIV.append(pEl);
}

// FUNCTION CALLS ---------------------------------------------
welcomeText();