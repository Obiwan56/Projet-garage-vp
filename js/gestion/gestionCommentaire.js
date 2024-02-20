// Pour le bouton de publication
$('#publiCommentaire .btn-primary').click(function () {
    let commentaireId = $(this).closest('tr').find('th').text(); // Récupère l'ID du commentaire à partir de la ligne de la table
    $.ajax({
        url: 'http://localhost:8000/api/commentaire/' + commentaireId + '/publish',
        type: 'PUT', // Utilisez PUT ou POST en fonction de votre logique de routage
        success: function (response) {
            alert(response.message); // Affiche un message de succès
            $('#publiCommentaire').modal('hide'); // Ferme la modale de publication
        },
        error: function (xhr, status, error) {
            alert(xhr.responseJSON.message); // Affiche un message d'erreur en cas d'échec
        }
    });
});

// Pour le bouton de suppression
document.querySelector('#deleteCommentaire .btn-primary').addEventListener('click', function () {
    // Pour le bouton de suppression
    $('#deleteCommentaire .btn-primary').click(function () {
        let commentaireId = $(this).closest('tr').find('th').text(); // Récupère l'ID du commentaire à partir de la ligne de la table
        $.ajax({
            url: 'http://localhost:8000/api/commentaire/' + commentaireId, // URL de l'API pour supprimer le commentaire
            type: 'DELETE', // Méthode HTTP DELETE pour supprimer le commentaire
            success: function (response) {
                alert(response.message); // Affiche un message de succès
                $('#deleteCommentaire').modal('hide'); // Ferme la modale de suppression
            },
            error: function (xhr, status, error) {
                alert(xhr.responseJSON.message); // Affiche un message d'erreur en cas d'échec
            }
        });
    });

    $('#deleteCommentaire').modal('hide');
});
