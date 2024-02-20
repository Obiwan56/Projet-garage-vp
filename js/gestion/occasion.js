document.addEventListener("DOMContentLoaded", function() {
    const filtreBtn = document.getElementById("filtreBtn");
    filtreBtn.addEventListener("click", filterAnnonces);

    function filterAnnonces() {
        // Récupérer les valeurs sélectionnées dans le formulaire
        const prixMin = document.getElementById("prixMin").value;
        const prixMax = document.getElementById("prixMax").value;
        const kmMin = document.getElementById("kmMin").value;
        const kmMax = document.getElementById("kmMax").value;
        const yearMin = document.getElementById("yearMin").value;
        const yearMax = document.getElementById("yearMax").value;
        const carbu = document.getElementById("carbu").value;
        const boite = document.getElementById("boite").value;

        // Filtrer les annonces en fonction des critères sélectionnés
        const annonces = document.querySelectorAll(".card");
        annonces.forEach(function(annonce) {
            const prix = parseInt(annonce.querySelector(".card-body p:nth-child(4)").textContent.split(" ")[0]);
            const km = parseInt(annonce.querySelector(".card-body p:nth-child(3)").textContent);
            const year = parseInt(annonce.querySelector(".card-body p:nth-child(2)").textContent.split(" ")[1]);
            const energie = annonce.querySelector(".card-body p:nth-child(4)").textContent.split(" ")[1];

            // Vérifier si l'annonce correspond aux critères de filtrage
            const isVisible = prix >= prixMin && prix <= prixMax &&
                              km >= kmMin && km <= kmMax &&
                              year >= yearMin && year <= yearMax &&
                              (carbu === "Energie" || energie === carbu) &&
                              (boite === "Boite" || annonce.querySelector(".card-title").textContent.toLowerCase().includes(boite.toLowerCase()));

            // Afficher ou masquer l'annonce en fonction du résultat du filtre
            if (isVisible) {
                annonce.style.display = "block";
            } else {
                annonce.style.display = "none";
            }
        });
    }
});
