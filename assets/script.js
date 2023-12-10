const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


/***************************** FLÉCHES *******************************/

// Sélection des boutons flèches
let arrowLeft = document.querySelector(".arrow_left");
let arrowRight = document.querySelector(".arrow_right");

// Au clic sur la flèche gauche :
function handleLeftClick() {
	console.log("Clic sur la flèche gauche");

}

// Au clic sur flèche droite :
function handleRightClick() {
	console.log("Clic sur la flèche droite");

}

// Event Listeners
arrowLeft.addEventListener("click", handleLeftClick);
arrowRight.addEventListener("click", handleRightClick);



/*************************** BULLET POINTS *************************/

// Sélection de la div 'dots'
let dotsContainer = document.querySelector(".dots");

// Création des bullet points
slides.forEach((slide, index) => {
	let dot = document.createElement("div");
	dot.classList.add("dot");
	dot.setAttribute("data-slide", index);
	dotsContainer.appendChild(dot);
});