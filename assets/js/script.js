//https://codepen.io/vdhug/pen/bGbXEKg

//ATTENTION PLS NOTE THE FUNCTION TYPGINGEFFECT AND DELETINGEFFECT ARE NOT MY CODE!!!
//I linked the above codepen where the logic was made by that developer and added some timing effects!

const words = ["Developer.", "Data Analyst.", "Musician.", "Gamer."];

let i = 0;
let timer;

function typingEffect() {
    //split up the word to get each letter. word is a list of individual letters here
    let word = words[i].split("");
    // Setting a boolean (True) to a function?
	var loopTyping = function() {
		if (word.length > 0) {
            //Typing the letter
            document.getElementById('word').innerHTML += word.shift();
		} else {
			deletingEffect();
			return false;
		};
		// How fast each individual letter gets typed (150 = .150 seconds per letter)
		timer = setTimeout(loopTyping, 150);
	};
	// When word is completely deleted, wait .6 seconds
	setTimeout(loopTyping, 600);
};

function deletingEffect() {
    //split up the word to get each letter. word is a list of individual letters here
    let word = words[i].split("");
    //while True
	var loopDeleting = function() {
		if (word.length > 0) {
            //delete a letter
			word.pop();
			document.getElementById('word').innerHTML = word.join("");
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

function wordChange(word, new_word) {
	document.getElementById(word).innerHTML = new_word
}


function transition(timing, timing_2) {
	//timing is the number needed to fadeout completley and then change word instantly
	//timing_2 is the number needed to fadein completely and then begin the LoopDelete and LoopType

	//Makes 'hey thats me' invisible
	//document.getElementById('me').style.opacity = '0';
	$('#me').fadeOut(0, function(){})

	//Have blinker completely invisible at the start
	$('#blinker').fadeOut(timing, function(){})

	//3 seconds to fadeout fully and changes the word "invisibly"
	$('#word').fadeOut(timing, function(){})
	setTimeout(wordChange, timing, 'word','')


	//only when it's been full faded out can you start fading in the first word
	$('#blinker').fadeIn(timing_2, function(){})


	$('#me').delay((timing)).fadeIn((timing - 1000), function(){})
	$('#word').fadeIn(timing_2, function(){})
	setTimeout(typingEffect, timing_2)
}

transition(3000, 4000)

