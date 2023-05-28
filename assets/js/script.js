const words = ["Writing Code", "Analyzing Data", "Creating Visualizations"]

let i = 0;
let timer;

function typingEffect() {
    //split up the word to get each letter. word is a list of individual letters here
    let word = words[i].split("");
    // Setting a boolean (True) to a function?
	var loopTyping = function() {
		if (word.length > 0) {
            //Typing the letter
            document.getElementById('words').innerHTML += word.shift();
		} else {
			deletingEffect();
			return false;
		};
		// How fast each individual letter gets typed (150 = .150 seconds per letter)
		timer = setTimeout(loopTyping, 150);
	};
	// When word is completely deleted, wait .5 seconds
	setTimeout(loopTyping, 500);
};

function deletingEffect() {
    //split up the word to get each letter. word is a list of individual letters here
    let word = words[i].split("");
    //while True
	var loopDeleting = function() {
		if (word.length > 0) {
            //delete a letter
			word.pop();
			document.getElementById('words').innerHTML = word.join("");
		} else {
			if (words.length > (i + 1)) {
				i++;
			} else {
				i = 0;
			};
			typingEffect();
			return false;
		};
		// how fast each individual letter gets deleted (100 = .1 seconds per letter)
		timer = setTimeout(loopDeleting, 100);
	};
	// When finished typing, delay 1.25 seconds
	setTimeout(loopDeleting,1250);
};

function transition(timing_2) {
    // Wait timing_2 and then start typing effect
	setTimeout(typingEffect, timing_2)
}

transition(2500)
