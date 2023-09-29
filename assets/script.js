// Etape 1 addEventListener et console.log		
let slideBoutonLeft = document.querySelector(".arrow_left");
slideBoutonLeft.addEventListener("click", function () {
	console.log("Vous avez cliqué sur le bouton gauche")
});

let slideBoutonRight = document.querySelector(".arrow_right");
slideBoutonRight.addEventListener("click", function () {
	console.log("Vous avez cliqué sur le bouton droite")
});

    let pathImage = ("/assets/images/slideshow/")
 // Tableau contenant les éléments avec des clés et des valeurs
	let diapo = [
		{ image: pathImage + "slide1.jpg", tagLine: "Impressions tous formats <span>en boutique et en ligne</span>", bullet : "x" },
		{ image: pathImage + "slide2.jpg", tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>", bullet : "x" },
		{ image: pathImage + "slide3.jpg", tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>", bullet : "x" },
		{ image: pathImage + "slide4.png", tagLine: "Autocollants <span>avec découpe laser sur mesure</span>", bullet : "x" },
		// Ajoutez d'autres éléments avec leurs clés et valeurs ici
	  ];
	
    // Fonction pour générer le contenu HTML
    function genererContenu(slides) {
      let contenu = "";

      for (let i = 0; i < diapo.length; i++) {
        let element = diapo[i];
        let image = element.image;
        let tagLine = element.tagLine;

        // Générer le contenu HTML pour chaque élément
        contenu += "<div class='slider_content_item'>";
        contenu += "<img src='" + image + "' class='image'>";
        contenu += "<p class='tag-line'>" + tagLine + "</p>";
        contenu += "</div>";
      }

      return contenu;
    }

    // Obtenir une référence à l'élément cible
    let divElement = document.querySelector(".slider_content");

    // Générer le contenu HTML et l'insérer dans l'élément cible
    divElement.innerHTML = genererContenu(diapo);





    // Boutons next and Previous - effet scrollLeft
	function previous() {
		const widthSlider = document.querySelector('.slider').offsetWidth;
		const sliderContent = document.querySelector('.slider_content');
		sliderContent.scrollLeft -= widthSlider;
		const scrollLeft = sliderContent.scrollLeft;
		const itemsSlider = sliderContent.querySelectorAll('.slider_content_item');
	
		if(scrollLeft == 0) {
			sliderContent.scrollLeft = widthSlider * (itemsSlider.length -1);
		}
	}
	
		function next() {
			const widthSlider = document.querySelector('.slider').offsetWidth;
			const sliderContent = document.querySelector('.slider_content');
			sliderContent.scrollLeft += widthSlider;
			const scrollLeft = sliderContent.scrollLeft;
			const itemsSlider = sliderContent.querySelectorAll('.slider_content_item');
		
			if(scrollLeft == widthSlider * (itemsSlider.length -1)) {
				sliderContent.scrollLeft = 0;
			}
		}







