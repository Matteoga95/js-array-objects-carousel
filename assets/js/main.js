// Consegna:
// Dato un array di oggetti letterali con:
// url dell’immagine
// titolo
// descrizione

// Creare un carosello come nella foto allegata.

// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


//mi seleziono il container a cui aggiungere le slide
const slidesElementParent = document.querySelector(".container");

//mi seleziono il container a cui aggiungere il testo
const textElementParent = document.querySelector(".text");

//loop dentro l'array di oggetti
images.forEach(immagine => {
    
    //creo l'elemento img
    const imgEl = document.createElement('img');
    imgEl.src = "./assets/" + immagine.image


    //lo aggiungo all html
    slidesElementParent.insertAdjacentElement("afterbegin", imgEl);

    //creo l'elemento testo
    const textEl = document.createElement('h3');
    textEl.innerText = immagine.title + '\n' + immagine.text

     //lo aggiungo all html
     textElementParent.insertAdjacentElement("afterbegin", textEl);

});      

//indice 0 gli metto la classe active
slidesElementParent.firstElementChild.classList.add("active");

textElementParent.firstElementChild.classList.add("active");



//mi istanzio la variabile con l'indice della slide attiva
let activeSlideCounter = 0;


//all click del mouse sulla freccia che punta in alto
const arrowUp = document.querySelector(".arrow-up > i")

arrowUp.addEventListener("click", function () {

    //per prendere la lista di slide
    //per tutte le immagini presenti nel blocco
    const slidesAll = document.querySelectorAll(".container > img");

    const textAll = document.querySelectorAll(".text > h3");



    const activeSlide = slidesAll[activeSlideCounter];
    const activeText = textAll[activeSlideCounter];

    //tolgo classe active a quella con indice attiva
    activeSlide.classList.remove("active");
    activeText.classList.remove("active");

    //incremento active slide di uno 
     //aggiungo un if se l'img è già indice massimo
     if (activeSlideCounter === slidesAll.length -1){

        activeSlideCounter = 0;
    } else{
        activeSlideCounter += 1;
    }
    

    //selezionono l' immagine e il testo dopo 
    const nextSlide = slidesAll[activeSlideCounter];
    const nextText = textAll[activeSlideCounter];

    //e gli applico la classe
    nextSlide.classList.add("active");
    nextText.classList.add("active");


})

//all click del mouse sulla freccia che punta in basso
const arrowDown = document.querySelector(".arrow-down > i")

arrowDown.addEventListener("click", function () {

    //per prendere la lista di slide
    //per tutte le immagini presenti nel blocco
    const slidesAll = document.querySelectorAll(".container > img");
    const textAll = document.querySelectorAll(".text > h3");


    const activeSlide = slidesAll[activeSlideCounter];
    const activeText = textAll[activeSlideCounter];

    //tolgo classe active a quella con indice attiva
    activeSlide.classList.remove("active");
    activeText.classList.remove("active");

    //incremento active slide di uno 

    //aggiungo un if se l'img è già indice 0
    if (activeSlideCounter === 0){

        activeSlideCounter = slidesAll.length -1;
    } else{
        activeSlideCounter -= 1;
    }
    

     //selezionono l' immagine e il testo dopo 
     const nextSlide = slidesAll[activeSlideCounter];
     const nextText = textAll[activeSlideCounter];
 

    //e gli applico la classe
    nextSlide.classList.add("active");
    nextText.classList.add("active");


})




