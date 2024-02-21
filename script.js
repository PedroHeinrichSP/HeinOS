const main = `HeinOS version 0.1.0
(C) 2024 Just me for real Inc. All rights reserved.

System information:
-------------------
Processor: a potato (If GLaDOS could run on a potato, so can this) 
Memory: 8 bytes (I'm not kidding, when I say this is a potato, I really mean it)
Graphics: Four freaking pixels
Storage: The void (It's just a black hole, thanks Robin)
Network: What a slow connection! (That's on you, pal)
Extras: Why are you still reading this? Go see my other projects! 
-------------------

░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░  ░░░░  ░░        ░░        ░░   ░░░  ░░░      ░░░░      ░░
▒  ▒▒▒▒  ▒▒  ▒▒▒▒▒▒▒▒▒▒▒  ▒▒▒▒▒    ▒▒  ▒▒  ▒▒▒▒  ▒▒  ▒▒▒▒▒▒▒
▓        ▓▓      ▓▓▓▓▓▓▓  ▓▓▓▓▓  ▓  ▓  ▓▓  ▓▓▓▓  ▓▓▓      ▓▓
█  ████  ██  ███████████  █████  ██    ██  ████  ████████  █
█  ████  ██        ██        ██  ███   ███      ████      ██
████████████████████████████████████████████████████████████                                              

Welcome to HeinOS! The most useless operating system ever created!

Type 'help' to see a list of available commands, or click on the pages to see them.

`;

const textMap = new Map();
textMap.set("what", "\n> What is this?");
textMap.set("projects", "\n> Projects");
textMap.set("about", "\n> About the creator");
textMap.set("contact", "\n> Contact me");
textMap.set("credits", "\n> Credits");

function type(text, id, index) {
    if (index <= text.length) {
        document.getElementById(id).textContent = text.substring(0, index);
        const cursor = document.getElementById("cursor");
        if (text[index] === '\n' || text[index] === '\r') {
            cursor.style.top = (parseInt(cursor.style.top) + 20) + 'px'; // Move cursor down to the next line
        } else {
            cursor.style.left = (index * 10) + 'px'; // Move cursor to the right
        }
        index++;
        window.scrollTo(0, document.body.scrollHeight); // Scroll to the bottom of the page
        setTimeout(type(text, id, index), (Math.random() * 150) % 100); // Adjust typing speed here
    }
}

function createNewDiv(stringKey) {
    const biggerString = textMap.get(stringKey);
    const newDiv = document.createElement("div");
    newDiv.style.display = "inline-block"; // Set display property to inline-block
    newDiv.style.whiteSpace = "pre"; // Set whitespace property to pre
    document.body.appendChild(newDiv);
    newDiv.id = stringKey; 
    type(biggerString, stringKey, 0);
}

window.onload = function () {
    type(main, "main", 0); 
    createNewDiv("what");
    createNewDiv("projects");
    createNewDiv("about");
    createNewDiv("contact");
    createNewDiv("credits");
};
