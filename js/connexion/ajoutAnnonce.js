/*
document.addEventListener("DOMContentLoaded", function() {
    // Sélectionnez le formulaire
    let form = document.querySelector('form');

    // Sélectionnez les champs d'entrée
    let marque = document.getElementById('marque');
    let serie = document.getElementById('serie');
    let km = document.getElementById('km');
    let description = document.getElementById('description');
    let carburant = document.getElementById('carburant');
    let formFileMultiple = document.getElementById('formFileMultiple');

    // Sélectionnez le bouton de soumission
    let submitButton = document.querySelector('button');

    // Ajoutez un écouteur d'événements sur le clic du bouton
    submitButton.addEventListener('click', function(event) {
        // Empêcher le comportement par défaut du bouton (envoi du formulaire)
        event.preventDefault();

        // Effectuez des vérifications sur les champs du formulaire
        if (marque.value.trim() === '') {
            alert('Veuillez entrer une marque.');
            marque.focus();
            return false;
        }

        if (serie.value.trim() === '') {
            alert('Veuillez entrer une série.');
            serie.focus();
            return false;
        }

        if (km.value.trim() === '' || isNaN(km.value)) {
            alert('Veuillez entrer un kilométrage valide.');
            km.focus();
            return false;
        }

        if (description.value.trim() === '') {
            alert('Veuillez entrer une description.');
            description.focus();
            return false;
        }

        if (carburant.value === 'choisir') {
            alert('Veuillez choisir un type de carburant.');
            carburant.focus();
            return false;
        }

        if (formFileMultiple.files.length === 0) {
            alert('Veuillez sélectionner au moins une image.');
            return false;
        }

        // Si toutes les vérifications passent, vous pouvez soumettre le formulaire
        form.submit();
    });
});
*/
