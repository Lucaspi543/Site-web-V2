//chargement du images.json


//Q14 pour avoir un bloc de texte à juste remplacer à chaque fois
let codeDuBloc = `
<section class="panel background{{href}}" id="{{href}}"> <div class="intitule"> <span>Ma passion pour le jeu vidéo - Lucas Prachith</span><div class="line-section"></div></div>
<div class="left-part">
    <h2 class="titre-image hidden">{{Titreimage}}</h2> <br>
    <figure class="cadre-image {{href}} hidden"> <img class="image-cliquable" src="{{url}}" alt="{{aria-label}}"><figcaption>
    <p>Source : {{source}}</p>
    <p>Auteur : {{auteur}}</p>
</div>
    </figcaption></figure> 
    <div class="cadrage-texte"><h2 class="titreBloc hidden2"> {{titreTexte}} <img class="star-titre" src="logo/star2.svg"></h2><p class="description hidden2">{{descriptionTexte}}</p></div>
    
</section>
`;

let codeBlocNav =
    '<li><a href="#{{href}}" aria-label="{{titreTexte}}" ></a></li>';

fetch('data.json').then(function (response) {
    response.json().then(function (data) {
        console.log(data);






        data.forEach(function (item) {
            let bloc = codeDuBloc
                .replace("{{Titreimage}}", item.Titreimage)
                .replace("{{titreTexte}}", item.titreTexte)
                .replace("{{titreTexte}}", item.titreTexte)
                .replace("{{aria-label}}", item.label)
                .replace("{{url}}", item.url)
                .replace("{{source}}", item.source)
                .replace("{{auteur}}", item.auteur)
                .replace("{{descriptionTexte}}", item.descriptionTexte)
                .replace("{{href}}", item.href)
                .replace("{{href}}", item.href)
                .replace("{{href}}", item.href)
                .replace("{{href}}", item.href);

            document.querySelector(".liste-images").innerHTML += bloc;
        });
        // data.forEach(function (item) {
        //     let blocNav = codeBlocNav
        //         .replace("{{href}}", item.href)
        //     // .replace("{{aria-label}}", item.aria-label);
        //     document.querySelector(".ajout-puce").innerHTML += blocNav;

        // });

        // APPLICATION DE LA CLASS HIDDEN

        // const hidden = document.querySelectorAll(".titre-image, .cadre-image");
        // hidden.forEach(function (hiddens) {

        //     hiddens.classList.add('hidden');
        // })


        //popup

        let fondColor = document.querySelector("body");
        let ajoutClasse = document.querySelector(".popup"); //selectionne le contenu avec classe popup


        let imagesCliquables = document.querySelectorAll(".image-cliquable");
        imagesCliquables.forEach(function (imageCliquable) {
            //  console.log(imageSelect)   //Q8
            imageCliquable.addEventListener('click', function (e) {
                // console.log(e.target);
                let srcValue = e.target.getAttribute('src');
                // console.log(srcValue);
                document.querySelector('.window img').setAttribute('src', srcValue);
                //mettre en attribut src le SrcValue qu'on a récup dans le sélecteur .window img


            });
            console.log(imageCliquable)

            imageCliquable.addEventListener('click', function (target) {
                // console.log(target)
                //détecte le click d'une image avec class : .image-cliquable

                //ajoute le fond gris derriere la popup
                // let fondColor = document.querySelector("body");
                fondColor.classList.add('fond-gris');

                //ajout de la class popup visible

                // let ajoutClasse = document.querySelector(".popup"); // sélectionne les balise ayant la classe popup
                ajoutClasse.classList.add('popup-visible'); // ajoute la class popup-visible

                console.log(ajoutClasse); //test

                //je sélectionne la div class="popup", puis je lui ajoute une class avec la commande"clasList.add('popup-visible')
                // let enleveClasse = document.querySelector(".popup");
                // enleveClasse.classList.remove('popup-invisible');
                // console.log(enleveClasse);

                ajoutClasse.classList.remove('popup-invisible');
                console.log(ajoutClasse);


            })

        })



        //pour fermer la fenetre

        let fermeImage = document.querySelector(".cacheFenetre"); // select element avec class .cachefenetre
        //c'est à dire le button

        console.log(fermeImage)

        fermeImage.addEventListener('click', function (target) { //détecte le click sur le button

            // let ajoutClasse = document.querySelector(".popup");
            ajoutClasse.classList.add('popup-invisible');

            console.log(ajoutClasse);//test

            //je sélectionne la div class="popup", puis je lui ajoute une class avec la commande"clasList.add('popup-visible')
            // let enleveClasse = document.querySelector(".popup");
            ajoutClasse.classList.remove('popup-visible');
            console.log(ajoutClasse);


            //enleve la classe fond-gris pour rendre la page blanche
            fondColor.classList.remove('fond-gris');

        })

        // ARRIVEE SUR UNE SECTION POUR ANIMER

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // console.log(entry.target)
                    entry.target.classList.add("visible");
                } else {
                    entry.target.classList.remove('visible');
                    // entry.target.classList.remove("hidden");
                }
            })
        }, {})
        const apparition = document.querySelectorAll(".titre-image, .cadre-image");
        apparition.forEach(el => observer.observe(el));



        const observer2 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // console.log(entry.target)
                    entry.target.classList.add("visible2");
                } else {
                    entry.target.classList.remove('visible2');
                    // entry.target.classList.remove("hidden");
                }
            })
        }, {})
        const apparition2 = document.querySelectorAll(".hidden2");
        apparition2.forEach(el => observer2.observe(el));



        const observer3 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // console.log(entry.target)
                    entry.target.classList.add("animation-star");
                } else {
                    entry.target.classList.remove('animation-star');
                    // entry.target.classList.remove("hidden");
                }
            })
        }, {})
        const apparition3 = document.querySelectorAll(".star-titre");
        apparition3.forEach(el => observer3.observe(el));



    });

});




//bouton mentions légales

let footer = document.querySelector("footer");

footer.addEventListener('click', function (target) {

    let footerContent = document.querySelector(".footerContent");

    footerContent.classList.add('footer-visible');
    footerContent.classList.remove('footer-invisible');

})


//FORMULAIRE

//Ajout d'une prévisualisation


//initialision des variables

// Sélection de tous les différents champs
let champComment = document.querySelector("#comment");
let champTitreImage = document.querySelector("#titre");
// let champDescription = document.querySelector("#description");
let champLien = document.querySelector("#lien");
let champNom = document.querySelector("#name");
let champPrénom = document.querySelector("#f-name");
let champEmail = document.querySelector("#email");
// Sélection de la balise ou l'on va ajouter le contenu entré dans le champs
let zoneAjout = document.querySelector(".ajout");
//Sélection du bouton "valider"
let bouton = document.querySelector(".validation");

// Détection du relachement des touches clavier sur le titre
document.querySelector("input, textarea").addEventListener("keyup", function () {
    // console.log("Titre :", champTitreImage.value);
    console.log(champTitreImage.value);
    console.log(champPrénom.value);
    console.log(champLien.value);
    console.log(champComment.value);
    console.log(champEmail.value);
    console.log(champNom.value);




    // Ajouter le contenu écrit dans les champs lorsque il y a évènement
    // du click sur le bouton valider


    bouton.addEventListener("click", function () {
        event.preventDefault();
        zoneAjout.innerHTML +=   //par concaténation
            '<div class="zone-ajoutee"><h3>'
            + champTitreImage.value //prend la valeur du champTitre
            + '</h3>'
            // +'<p>'
            // + champDescription.value
            // + '</p>' 
            + '<img src="'
            + champLien.value
            + '" alt="'
            + champTitreImage.value
            + '" width="200"><p>'
            + champComment.value
            + '</p>'
            + 'de <p>'
            + champPrénom.value + ' ' + champNom.value
            + '</p></div>'
            ;



        //afficher sur la console le mssage de succès ou d'erreur de l'envoi de donnée
        let urlVisitee = "https://gambette.butmmi.o2switch.site/api.php?format=json"
            + "&login=prachithlucas"
            + "&email=" + champEmail.value
            + "&message=" + zoneAjout.innerHTML;

        console.log(urlVisitee);

        // INITIALISATION DE VARIABLE----------------------


           
        fetch(urlVisitee).then(function (response) {
            response.json().then(function (data) {
                console.log("Réponse reçue : ")
                console.log(data);

                 //apparition d'un popup d'envoi confirmé du formulaire remplit
            let fondColor = document.querySelector("body");
            let popupFormulaire = document.querySelector(".popup-formulaire");
            let boutonFermer = document.querySelector(".cacheFenetre-formulaire"); // select element avec class .cachefenetre
            //c'est à dire le button

                popupFormulaire.classList.replace("popup-invisible", "popup-visible");
                fondColor.classList.add('fond-gris');

                boutonFermer.addEventListener('click', function (target) { //détecte le click sur le button

                    popupFormulaire.classList.replace("popup-visible", "popup-invisible");


                    //enleve la classe fond-gris pour rendre la page blanche
                    fondColor.classList.remove('fond-gris');


                });
            });
        });




            // INITIALISATION DE VARIABLE----------------------


            //apparition d'un popup d'envoi confirmé du formulaire remplit
            // let fondColor = document.querySelector("body");
            // let popupFormulaire = document.querySelector(".popup-formulaire");
            // let popupFormulaireErreur = document.querySelector(".popup-formulaire-erreur");
            // let boutonFermer = document.querySelector(".cacheFenetre-formulaire"); // select element avec class .cachefenetre
            //c'est à dire le button

            // fetch(urlVisitee).then(function (response) {
            //     response.json().then(function (data) {
            //         if (data.status == "success") {



            //             popupFormulaire.classList.replace("popup-invisible", "popup-visible");
            //             fondColor.classList.add('fond-gris');

            //             boutonFermer.addEventListener('click', function (target) { //détecte le click sur le button

            //                 popupFormulaire.classList.replace("popup-visible", "popup-invisible");


            //                 //enleve la classe fond-gris pour rendre la page blanche
            //                 fondColor.classList.remove('fond-gris');

            //             })
            //         } else {
            //             popupFormulaireErreur.classList.replace("popup-invisible", "popup-visible");
            //             fondColor.classList.add('fond-gris');

            //             boutonFermer.addEventListener('click', function (target) { //détecte le click sur le button

            //                 popupFormulaireErreur.classList.replace("popup-visible", "popup-invisible");


            //                 //enleve la classe fond-gris pour rendre la page blanche
            //                 fondColor.classList.remove('fond-gris');
            //             })
            //         }
            //     })



            // });

        });

    });









    // APRES ENVOIE FORMULAIRE
    //Faire apparraitre bouton vers la prévisualisation

    bouton.addEventListener("click", function () {
        document.querySelector(".vers-previsu").classList.add("boutonVisible");

    })

    //apparition du bouton retour haut de page
    const retour = document.querySelector(".retour");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 1400) { // valeur de scroll
            retour.classList.remove("hidden");
        }
        else {
            retour.classList.add("hidden");
        }

    });






