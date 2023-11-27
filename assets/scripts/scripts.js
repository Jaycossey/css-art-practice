// GLOBALS -------------------------------------------------------

/**
 * I want this program to be a simple journey using css as the base, a simple 
 * hello world, followed by a series of css art, render simple hello world with 
 * animated text
 * 
 * onclick then change the images shown using js but create images with css
 * 
 * start simple then expand on ideas
 */

// Root div for all content
const ROOT_DIV = document.getElementById('root');

// Welcome text string
const hello = "$ Hello, World! Hit return to begin...";

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

    return;
}

welcomeText();
