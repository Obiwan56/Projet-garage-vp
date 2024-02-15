const marque = document.getElementById("marque");
const serie = document.getElementById("serie");
const km = document.getElementById("km");
const description = document.getElementById("description");
const carburant = document.getElementById("carburant");
const formFileMultiple = document.getElementById("formFileMultiple");
const ajoutAnnonceBtn = document.getElementById("ajoutAnnonceBtn");

ajoutAnnonceBtn.addEventListener("click", function() {
    // Récupérer les valeurs des champs du formulaire
    const marqueValue = marque.value;
    const serieValue = serie.value;
    const kmValue = km.value;
    const descriptionValue = description.value;
    const carburantValue = carburant.value;

    // Créer un objet contenant les données du formulaire
    const formData = new FormData();
    formData.append("marque", marqueValue);
    formData.append("serie", serieValue);
    formData.append("km", kmValue);
    formData.append("description", descriptionValue);
    formData.append("carburant", carburantValue);

    // Envoyer les données au serveur via une requête AJAX POST
    fetch("/api/user", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data); // Afficher la réponse du serveur dans la console
    })
    .catch(error => {
        console.error("Error:", error); // Afficher les erreurs dans la console
    });
});
