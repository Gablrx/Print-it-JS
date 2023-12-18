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
];

/***************************** FLÉCHES *******************************/

// Flèches
let arrowLeft = document.querySelector(".arrow_left");
let arrowRight = document.querySelector(".arrow_right");

// Index du slide actuel
let currentSlideIndex = 0;

// Fonction pour mettre à jour le slide
function updateSlide(newIndex) {
	// Màj l'index du slide actuel
	currentSlideIndex = newIndex;

	// Màj src image
	let bannerImage = document.querySelector(".banner-img");
	bannerImage.src = `./assets/images/slideshow/${slides[newIndex].image}`;

	// Màj du texte
	let bannerText = document.querySelector("#banner p");
	bannerText.innerHTML = slides[newIndex].tagLine;

	// Màj du bullet point 
	document.querySelectorAll(".dot").forEach(dot => dot.classList.remove("dot_selected"));
	dotsContainer.children[newIndex].classList.add("dot_selected");
}


// Flèche droite :
function handleRightClick() {
	if (currentSlideIndex === slides.length - 1) {  // Si le slide actuel est le dernier de la liste
		currentSlideIndex = 0;  // Retour au premier slide
	} else { //Si le slide actuel n'est pas le dernier, 
		currentSlideIndex += 1; // Passe au suivant
	}
	updateSlide(currentSlideIndex); // Mise à jour avec le nouvel index du slide
}

// Flèche gauche :
function handleLeftClick() {
	if (currentSlideIndex === 0) {
		currentSlideIndex = slides.length - 1;
	} else {
		currentSlideIndex -= 1;
	}
	updateSlide(currentSlideIndex);
}

// Event Listeners
arrowLeft.addEventListener("click", handleLeftClick);
arrowRight.addEventListener("click", handleRightClick);



/*************************** BULLET POINTS *************************/

// Sélection de la div dots
let dotsContainer = document.querySelector(".dots");

// Création des bullet points et ajout des écouteurs d'événements
slides.forEach((slide, index) => {
	let dot = document.createElement("div");
	dot.classList.add("dot");
	dot.addEventListener("click", () => {
		updateSlide(index);
	});
	dotsContainer.appendChild(dot);
});

// Ajoute la classe .dot_selected pour le slide actuel
let currentSlideDot = dotsContainer.querySelector(".dot");
if (currentSlideDot) {
	currentSlideDot.classList.add("dot_selected");
}


// Slide initial :
updateSlide(0);