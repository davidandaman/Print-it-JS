const slides = [
	{
		src: "./assets/images/slideshow/slide1.jpg",
		name: "Image 1",
		tagLine :"Impressions tous formats <span>en boutique et en ligne</span>"
		//"image":"slide1.jpg",
		//"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		src: "./assets/images/slideshow/slide2.jpg",
		name: "Image 2",
		tagLine :"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
		//"image":"slide2.jpg",
		//"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		src: "./assets/images/slideshow/slide3.jpg",
		name: "Image 3",
		tagLine :"Grand choix de couleurs <span>de CMJN aux pantones</span>"
		//"image":"slide3.jpg",
		//"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		src: "./assets/images/slideshow/slide4.jpg",
		name: "Image 4",
		tagLine :"Autocollants <span>avec découpe laser sur mesure</span>"
		//"image":"slide4.png",
		//"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//console.log(slides[0])
//console.log(slides[1])
//console.log(slides[2])
//console.log(slides[3])

//let i = 0


//let btnNext = document.querySelector(".arrow_left")
//let btnPrevious = document.querySelector("arrow_right")
//afficherImage(slides[i])
//btnNext.addEventListener("click", () => {
	//console.log(i++)
//})



//let footer = document.querySelector("footer")
//footer.innerHTML = div

console.log(slides[0])
console.log(slides[1])
console.log(slides[2])
console.log(slides[3])

let slideBoutonLeft = document.querySelector(".arrow_left");
slideBoutonLeft.addEventListener("click", function () {
	console.log("Vous avez cliqué sur le bouton gauche")
});

let slideBoutonRight = document.querySelector(".arrow_right");
slideBoutonRight.addEventListener("click", function () {
	console.log("Vous avez cliqué sur le bouton droite")
});


// Afficher les images dans le HTML
// Index de l'image active
let currentIndex = 0;

// Passer à l'image précédente slideBoutonLeft


// Passer à l'image suivante slideBoutonRight



// recuperer le nombre d'images dans le tableau et faire la relation avec les points
// Afficher les dots suivant slide.lenght
// Afficher l'élément de l'élément du tableau de slide actif





