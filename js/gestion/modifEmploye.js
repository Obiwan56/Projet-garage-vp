const nom = document.getElementById("nom");
const prenom = document.getElementById("prenom");
const email = document.getElementById("email");
const modifEmployeBtn = document.getElementById("modifEmployeBtn");

modifEmployeBtn.addEventListener("click", () => {
    if (validerFormulaire()) {
        envoyerDonneesServeur();
    }
});

email.addEventListener("keyup", validateMail);

function validerFormulaire() {
    const isValidNom = validateInput(nom);
    const isValidPrenom = validateInput(prenom);
    const isValidEmail = validateMail(email);
    
    return isValidNom && isValidPrenom && isValidEmail;
}

function validateInput(input) {
    if (input.validity.valid) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function validateMail(input) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;
    if (mailUser.match(emailRegex)) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function envoyerDonneesServeur() {
    const nomValue = nom.value;
    const prenomValue = prenom.value;
    const emailValue = email.value;

    const data = {
        nom: nomValue,
        prenom: prenomValue,
        email: emailValue
    };

    // Effectuer une requête AJAX PUT pour envoyer les données au serveur
    $.ajax({
        url: "http://localhost:8000/api/user", 
        type: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function(response) {
            alert("Les données ont été mises à jour avec succès !");
        },
        error: function(xhr, status, error) {
            console.error(error);
            alert("Erreur lors de la mise à jour des données de l'employé.");
        }
    });
}
