// Récupération des éléments du formulaire
const marqueInput = document.getElementById("marque");
const serieInput = document.getElementById("serie");
const kmInput = document.getElementById("km");
const yearInput = document.getElementById("year");
const descriptionInput = document.getElementById("description");
const carburantInput = document.getElementById("carburant");
const imagesInput = document.getElementById("formFileMultiple");
const ajoutAnnonceBtn = document.getElementById("ajoutAnnonceBtn");

// Appeler validateForm lorsque des événements pertinents se produisent dans le formulaire
marqueInput.addEventListener("keyup", validateForm);
serieInput.addEventListener("keyup", validateForm);
kmInput.addEventListener("keyup", validateForm);
yearInput.addEventListener("keyup", validateForm);
descriptionInput.addEventListener("keyup", validateForm);
carburantInput.addEventListener("change", validateForm);
imagesInput.addEventListener("change", validateForm);
ajoutAnnonceBtn.addEventListener("click", validateForm);

// Fonction de validation du formulaire
function validateForm() {
    const isValid = validateInput(marqueInput) &&
                     validateInput(serieInput) &&
                     validateInput(kmInput) &&
                     validateInput(yearInput) &&
                     validateInput(descriptionInput) &&
                     validateInput(carburantInput) &&
                     validateInput(imagesInput);

    // Activer ou désactiver le bouton d'ajout d'annonce en fonction de la validité du formulaire
    ajoutAnnonceBtn.disabled = !isValid;
}

// Fonction de validation des champs du formulaire
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

// Envoyer les données du formulaire au serveur via une requête AJAX POST
ajoutAnnonceBtn.addEventListener("click", function(event) {
    event.preventDefault(); // Empêche le formulaire de se soumettre normalement

    // Créer un objet FormData pour envoyer les données du formulaire
    const formData = new FormData(document.getElementById("ajoutAnnonce"));

    // Envoyer les données au serveur via une requête AJAX POST
    $.ajax({
        url: "http://localhost:8000/api/vehicule",
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        success: function(data) {
            // Gérer la réponse du serveur si nécessaire
            console.log(data);
            document.location.href = "/gestioneAnnonce";
        },
        error: function(xhr, status, error) {
            // Gérer les erreurs si la requête échoue
            console.error(error);
            alert("Erreur lors de l'ajout de l'annonce.");
        }
    });
});
