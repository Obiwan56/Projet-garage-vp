const marque = document.getElementById("marque");
const serie = document.getElementById("serie");
const km = document.getElementById("km");
const year = document.getElementById("year");
const description = document.getElementById("description");
const carburant = document.getElementById("carburant");
const formFileMultiple = document.getElementById("formFileMultiple");
const ajoutAnnonceBtn = document.getElementById("ajoutAnnonceBtn");

// Fonction de validation du formulaire
function validateForm() {
    const marqueOk = (marque);
    const serieOk = (serie);
    const kmOk = (km);
    const yearOk = (year);
    const descriptionOk = (description);
    const carburantOk = (carburant);

    // Activer ou désactiver le bouton d'ajout d'employé en fonction de la validité du formulaire
    if (marqueOk && serieOk && kmOk && yearOk && descriptionOk && carburantOk) {
        ajoutAnnonceBtn.disabled = false;
    } else {
        ajoutAnnonceBtn.disabled = true;
    }
}


// Envoyer les données du formulaire au serveur via une requête AJAX POST
$(document).ready(function() {
    $('#ajoutAnnonceBtn').click(function(e) {
        e.preventDefault(); // Empêche le formulaire de se soumettre normalement

        // Capturer les données du formulaire
        let marqueValue = marque.value;
        let serieValue = serie.value;
        let kmValue = km.value;
        let yearValue = year.value;
        let descriptionValue = description.value;
        let carburantValue = carburant.value;

        // Créer un objet contenant les données
        let data = {
            marque: marqueValue,
            serie: serieValue,
            km: kmValue,
            year: yearValue,
            description: descriptionValue,
            carburant: carburantValue
        };

        // Envoyer les données au serveur via une requête AJAX POST
        $.ajax({
            url: 'http://localhost:8000/api/vehicule',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function(response) {
                // Gérer la réponse du serveur si nécessaire
                document.location.href="/gestionAnnonce";
                console.log(response);
            },
            error: function(xhr, status, error) {
                // Gérer les erreurs si la requête échoue
                if (xhr.status === 409) {
                    alert("Une annonce identique existe déjà");
                } else {
                    alert("Erreur lors de la création de l'annonce.");
                    console.error(error);
                }
            }
        });
    });
});
