// Utiliser un délégué d'événements pour écouter les clics sur les boutons de suppression
$(document).on('click', '.btn-danger', function() {
    // Code pour gérer la suppression de l'employé
    console.log('Employé supprimé');
    // Fermer la modal de suppression
    $('#deleteEmployeModal').modal('hide');
});

// Utiliser un délégué d'événements pour écouter les clics sur les boutons de modification
$(document).on('click', '.btn-primary', function() {
    // Code pour gérer la modification de l'employé
    console.log('Employé modifié');
    // Fermer la modal de modification
    $('#modifyEmployeModal').modal('hide');
});



$(document).ready(function() {
    // Effectuer une requête AJAX pour récupérer les employés
    $.ajax({
        url: '/employes',
        type: 'GET',
        success: function(employes) {
            // Remplir le tableau avec les données des employés
            employes.forEach(function(employe) {
                let row = '<tr>' +
                            '<td>' + employe.email + '</td>' +
                            '<td>' + employe.nom + '</td>' +
                            '<td>' + employe.prenom + '</td>' +
                            '<td>' +
                                '<button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteEmployeModal">' +
                                    '<i class="bi bi-trash"></i>' +
                                '</button>' +
                                '<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modifyEmployeModal">' +
                                    '<i class="bi bi-pencil-square"></i>' +
                                '</button>' +
                            '</td>' +
                          '</tr>';
                $('#tablCom tbody').append(row);
            });
        }
    });
});