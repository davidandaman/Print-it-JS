const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//let btnNext = document.querySelector(".arrow_left")
//let btnPrevious = document.querySelector("arrow_right")
//afficherImage(slides[i])
//btnNext.addEventListener("click", () => {
//console.log(i++)
//})

//let footer = document.querySelector("footer")
//footer.innerHTML = div



console.log(slides[0].tagLine)
console.log(slides[0].image)
console.log(slides[1])
console.log(slides[2])
console.log(slides[3])

let i = 0

let slideBoutonLeft = document.querySelector(".arrow_left");
slideBoutonLeft.addEventListener("click", function () {
	console.log("Vous avez cliqué sur le bouton gauche")
});

let slideBoutonRight = document.querySelector(".arrow_right");
slideBoutonRight.addEventListener("click", function () {
	console.log("Vous avez cliqué sur le bouton droite")
});






// Tableau des éléments avec des clés et des valeurs
const tableau = [
	{ image: "./assets/images/slideshow/slide1.jpg", tagLine: "Impressions tous formats <span>en boutique et en ligne</span>" },
	{ image: "./assets/images/slideshow/slide2.jpg", tagLine: "Légende de l'image 2" },
	{ image: "./assets/images/slideshow/slide3.jpg", tagLine: "Légende de l'image 3" },
	{ image: "./assets/images/slideshow/slide4.png", tagLine: "Légende de l'image 3" },
  ];
  
    // Récupérer l'élément div pour contenir les éléments
    let containerDiv = document.querySelector(".slider_content");

    // Parcourir le tableau et générer le contenu HTML
    for (let i = 0; i < tableau.length; i++) {
      let element = tableau[i];

      // Créer un élément div pour chaque élément du tableau
      let divElement = document.createElement("div");
	  divElement.classList.add("slider_content_item");

      // Créer l'élément img pour l'image
      let imgElement = document.createElement("img");
      imgElement.src = element.image;
	  imgElement.classList.add("slider_content_item");
      divElement.appendChild(imgElement);

      // Créer l'élément p pour la tagLine
      let pElement = document.createElement("p");
      pElement.textContent = element.tagLine;
      divElement.appendChild(pElement);

      // Ajouter l'élément div au conteneur
      containerDiv.appendChild(divElement);
	  
    }

	function previous() {
		const widthSlider = document.querySelector('.slider_content').offsetWidth;
		document.querySelector('.slider_content').scrollLeft -= widthSlider;
	
	}
	
	function next() {
		const widthSlider = document.querySelector('.slider_content').offsetWidth;
		document.querySelector('.slider_content').scrollLeft += widthSlider;
	
	}