const black = document.getElementById('black-header');
const whiteText = document.querySelector('h1.white-text');

const white = document.getElementById('white-header');
const blackText = document.querySelector('h1.black-text')

function reverseColor(color, textColor) {
	if (color === black) {
		color.style.backgroundColor = "white";
		textColor.style.color = "black";
	} else if (color === white) {
		color.style.backgroundColor = "black";
		textColor.style.color = "white";
	}
}

function revertColor(color, textColor) {
	if (color === black) {
		color.style.backgroundColor = "black";
		textColor.style.color = "white";
	} else if ( color === white) {
		color.style.backgroundColor = "white";
		textColor.style.color = "black";
	}
}


document.addEventListener("keydown", function (event) {
	if (black.style.backgroundColor === "black") {
		reverseColor(black, whiteText);
		reverseColor(white, blackText);
	} else {
		revertColor(black, whiteText);
		revertColor(white, blackText);
	} 
});

/*
document.addEventListener("keydown", function (event) {
	if (event.key === "ArrowLeft") {
		reverseColor(black, whiteText);
		reverseColor(white, blackText);
	} else if (event.key === "ArrowRight") {
		revertColor(black, whiteText);
		revertColor(white, blackText);
	}
});

*/