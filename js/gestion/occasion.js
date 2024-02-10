document.getElementById('filtreBtn').addEventListener('click', function() {
    // Récupérer les valeurs sélectionnées dans les menus déroulants
    const prixMin = document.getElementById('prixMin').value;
    const prixMax = document.getElementById('prixMax').value;
    const kmMin = document.getElementById('kmMin').value;
    const kmMax = document.getElementById('kmMax').value;
    const yearMin = document.getElementById('yearMin').value;
    const yearMax = document.getElementById('yearMax').value;
    const carbu = document.getElementById('carbu').value;
    const boite = document.getElementById('boite').value;

    // Appliquer les filtres
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        const itemPrix = parseInt(item.getAttribute('data-prix'));
        const itemKm = parseInt(item.getAttribute('data-km'));
        const itemYear = parseInt(item.getAttribute('data-year'));
        const itemCarbu = item.getAttribute('data-carbu');
        const itemBoite = item.getAttribute('data-boite');

        if (itemPrix >= prixMin && itemPrix <= prixMax &&
            itemKm >= kmMin && itemKm <= kmMax &&
            itemYear >= yearMin && itemYear <= yearMax &&
            (carbu === "0" || itemCarbu === carbu) &&
            (boite === "0" || itemBoite === boite)) {
            item.style.display = 'block'; // Afficher l'élément si toutes les conditions sont remplies
        } else {
            item.style.display = 'none'; // Masquer l'élément sinon
        }
    });
});