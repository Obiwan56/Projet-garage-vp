const prenom = document.getElementById("prenom");
const message = document.getElementById("message");
const btn = document.getElementById("btnComm");

prenom.addEventListener("keyup", validateForm);
message.addEventListener("keyup", validateForm);

//Function permettant de valider tout le formulaire
function validateForm() {
    const prenomOk = validateRequired(prenom);
    const messageOk = validateRequired(message);

    //pour que le bouton soit accessible une fois le form valide
    if (prenomOk && messageOk) {
        btn.disabled = false;
    }
    else {
        btn.disabled = true;
    }
}

function validateRequired(input) {
    if (input.value != '') {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}




// Sélectionnez toutes les étoiles
const stars = document.querySelectorAll('.rating a');

// Ajoutez un écouteur d'événements à chaque étoile
stars.forEach(star => {
star.addEventListener('click', (e) => {
    e.preventDefault(); // Empêche le comportement par défaut du lien

    // Obtenez le nombre d'étoiles sélectionnées
    const rating = parseInt(star.getAttribute('href').substring(1));

    // Mettez à jour le style des étoiles en fonction de la note sélectionnée
    stars.forEach((s, index) => {
        if (index < rating) {
             s.classList.add('selected');
        } else {
             s.classList.remove('selected');
             }
         });
    });
});



  
