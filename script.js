const text = `HeinOS version 0.1.0
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

`;
let index = 0;

function type() {
    if (index <= text.length) {
        document.getElementById("text").textContent = text.substring(0, index);
        document.getElementById("cursor").style.left = (index * 10) + 'px'; // Adjust cursor position based on index
        index++;
        setTimeout(type, (Math.random() * 150) % 1); // Adjust typing speed here
    }
}

window.onload = function () {
    type();
};
